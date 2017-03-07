#encoding=utf-8
import sys

import random
import json
import os

partners=[]

names=["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","RR","OO","PP","ZZ","XX","UU"]

icons=["http://img0.imgtn.bdimg.com/it/u=275622820,2944364039&fm=214&gp=0.jpg","http://d.hiphotos.baidu.com/zhidao/wh%3D600%2C800/sign=44efbe491e30e924cff194377c38423e/dcc451da81cb39dbf51ac417d1160924aa18309c.jpg","http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg",
"http://scimg.jb51.net/touxiang/201702/2017022714230065.jpg",
"http://img2.touxiang.cn/file/20160314/1054b0b5ddbf47ea0054cfcef2b3c05f.jpg",
"http://img2.touxiang.cn/file/20160314/f1699de64121443a6fec0fe507d27e37.jpg",
"http://img2.touxiang.cn/file/20160314/2eda083f8f2a076b3e8cab901f3e238e.jpg",
"http://img2.touxiang.cn/file/20160314/eff17f4895f1e89d0b788a88d2626144.jpg",
"http://img2.touxiang.cn/file/20160314/77ddaa17905e8bb7bdd3ed70432f1f6b.jpg"
]

class partner(object):
	def __init__(self,*args,**kwarg):
		super(partner,self).__init__()
		for name in kwarg:
			setattr(self,name,kwarg[name])
	


for i in range(len(names)):
	id=i
	name= names[i]
	index = random.randint(0,len(icons)-1)
	image = icons[index]
	# id name image trget
	one = partner(id=id,name=name,image=image,target="http://www.baidu.com")

	partners.append(one)

result = [one.__dict__ for one in partners]

path = os.path.join(os.getcwd(),"partners.json")
with open(path,"w+") as file:
	json.dump(result,file)