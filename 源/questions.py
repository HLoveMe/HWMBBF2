#encoding=utf-8
import sys

import random
import json
import os


def A():
    questions=[]
    names=[
        "If a custom component is going to be used within Virtual Scroll",
        "iOS Cordova WKWebView",
        "Lock in element dimensions and locations",
        "Set Approximate Widths and Heights",
        "Efficient headers and footer functions"
    ]

    for i in range(5):
        id=i
        name=names[i]
        questions.append({"id":id,"name":name})
    result={"title":"问卷ASAS","data":questions}

    path = os.path.join(os.getcwd(),"questions.json")
    with open(path,"w+") as file:
        json.dump(result,path)

#A()

def B():
    #单选
    #多选
    #问答题
    #10个试卷
    restlt=[]
    for i in range(5):
        ques={"id":i}
        #八个题目
        radios=[];
        checks=[];
        sketch=[];
        ques["radio"]=radios;
        ques["checks"]=checks;
        ques["sketch"]=sketch;
        for K in range(8):
            type = random.randint(0,3)
            print K
            if type==0:
                #单选
                num = random.randint(5,7)
                #多少个答案
                ans={"title":"单选题目名。。。","type":0,"id":K}
                _ans=[];
                for j in range(num):
                    _ans.append("SASAS&*(HJKHSAK)")
                ans["quesions"]=_ans;
                radios.append(ans);
            elif type==1:
                #多选
                num = random.randint(5,7)
                #多少个答案
                ans={"title":"多选题目名。。。","type":1,"id":K}
                _ans=[];
                for j in range(num):
                    _ans.append("SASAS&*(HJKHSAK)")
                ans["questions"]=_ans;
                checks.append(ans);
            else:
    
                #问答
                sketch.append({"title":"简述题目名....","type":2,"id":K})
        restlt.append(ques)

        path = os.path.join(os.getcwd(),"questions_detail.json")

        
        with open(path,"w+") as file:
            json.dump(restlt,file)

B()