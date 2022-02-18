from io import BytesIO
import os
from PIL import Image as pilimg
import pymysql
import docx
from docx import Document
from docx.text.paragraph import Paragraph
from docx.image.image import Image
from docx.parts.image import ImagePart
from docx.oxml.shape import CT_Picture

db = pymysql.connect(host='localhost',port=3306,user='root',password='ad5226236',database='GridManage')
# prepare a cursor object using cursor() method
cursor = db.cursor()

# execute SQL query using execute() method.
cursor.execute("SELECT VERSION()")

# Fetch a single row using fetchone() method.
data = cursor.fetchone()

print ("Database version : %s " % data)


# 处理word文档

def get_picture(document: Document, paragraph: Paragraph):
    img = paragraph._element.xpath('.//pic:pic')
    if not img:
        return
    img: CT_Picture = img[0]
    embed = img.xpath('.//a:blip/@r:embed')[0]
    related_part: ImagePart = document.part.related_parts[embed]
    image: Image = related_part.image
    return image

path = "D:\\Personal\\IntegrateProjects\\GridManageBackEnd\\src\\python\\result5.docx"
document = Document(path)

res = []
resImg=0
for para in document.paragraphs:
    img=get_picture(document,para)
    if img is None:
        content = para.text.split('：')
        if(len(content)!=1):
            res.append(content[1])
            host = 'D:\\ManageProfileImg\\'
            if(content[0]=='网格名称'):
            # 输入到数据库里一次,图片肯定是已经处理好过的，可以放心添加
            # 先保存好图片
                try:
                    savePicPath=res[2]+'.jpg'
                    resImg.save(host+savePicPath)
                except OSError:
                    savePicPath=res[2]+'.png'
                    resImg.save(host+savePicPath)
                res.append(savePicPath)
                # 构建sql
                sql = """
                    insert into managers(fatherid,ownid,name,phone,profileImg,gridname) values (%s,%s,%s,%s,%s,%s)
                """
                print(res)
                param=(res[2][0:8],res[2],res[0],res[1],'http://localhost:8080/ManageProfileImg/'+savePicPath,res[3])
                cursor.execute(sql,param)
                db.commit()
                res = []
        continue
    else:
        resImg = pilimg.open(BytesIO(img.blob))
        # img.open(BytesIO(img.blob)).show()
        # pilimg1.show()
db.close()