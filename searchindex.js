Search.setIndex({"docnames":["../index","../changelog"],"filenames":["../","../changelog/"],"objects":{"WEBLOCKS-NAVIGATION-WIDGET":{"DEFROUTES":[0,12,2,"x-28WEBLOCKS-NAVIGATION-WIDGET-3ADEFROUTES-20-2840ANTS-DOC-2FLOCATIVES-3AMACRO-29-29"],"NAVIGATION-WIDGET":[0,3,2,"x-28WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-20CLASS-29"],"CURRENT-WIDGET":[0,18,2,"x-28WEBLOCKS-NAVIGATION-WIDGET-3ACURRENT-WIDGET-20-2840ANTS-DOC-2FLOCATIVES-3AREADER-20WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-29-29"],"CURRENT-PATH":[0,18,2,"x-28WEBLOCKS-NAVIGATION-WIDGET-3ACURRENT-PATH-20-2840ANTS-DOC-2FLOCATIVES-3AREADER-20WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-29-29"],"NAVIGATION-RULES":[0,18,2,"x-28WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-RULES-20-2840ANTS-DOC-2FLOCATIVES-3AREADER-20WEBLOCKS-NAVIGATION-WIDGET-3ANAVIGATION-WIDGET-29-29"]}},"objnames":[["lisp","symbol","Symbol"],["lisp","argument","Argument"],["lisp","system","ASDF System"],["lisp","class","Class"],["lisp","compiler-macro","Compiler Macro"],["lisp","constant","Constant"],["lisp","function","Function"],["lisp","generic-function","Generic Function"],["lisp","glossary-term","Glossary Term"],["lisp","include","Included Block"],["lisp","stdout-of","Stdout of Code"],["lisp","locative","Locative"],["lisp","macro","Macro"],["lisp","method","Method"],["lisp","package","Package"],["lisp","restart","Restart"],["lisp","section","Section"],["lisp","accessor","Accessor"],["lisp","reader","Slot Reader"],["lisp","writer","Slot Write"],["lisp","structure-accessor","Structure Accessor"],["lisp","type","Type"],["lisp","variable","Variable"]],"objtypes":["lisp:symbol","lisp:argument","lisp:system","lisp:class","lisp:compiler-macro","lisp:constant","lisp:function","lisp:generic-function","lisp:glossary-term","lisp:include","lisp:stdout-of","lisp:locative","lisp:macro","lisp:method","lisp:package","lisp:restart","lisp:section","lisp:accessor","lisp:reader","lisp:writer","lisp:structure-accessor","lisp:type","lisp:variable"],"terms":{"Version:":[0],"0.7.0":[1,0],"Description:":[0],"A":[0],"contain":[0],"widget":[1,0],"which":[1,0],"switch":[0],"between":[0],"children":[0],"when":[1,0],"user":[0],"chang":[0],"an":[0],"url.":[0],"Licence:":[0],"BSD":[0],"Author:":[0],"Alexand":[0],"Artemenko":[0],"<svetlyak.40wt@gmail.com>":[0],"Homepage:":[0],"https://40ants.com/weblocks-navigation-widget/":[0],"Bug":[0],"tracker:":[0],"https://github.com/40ants/weblocks-navigation-widget/issu":[0],"Sourc":[0],"control:":[0],"GIT":[0],"Depend":[0],"on:":[0],"40ants-doc":[0],",":[1,0],"docs-config":[0],"log4cl":[0],"weblock":[1,0],"weblocks-ui":[0],"WEBLOCKS-NAVIGATION-WIDGET":[0],"ASDF":[1,0],"System":[0],"Detail":[0],"Thi":[1,0],"addon":[0],"for":[1,0],"Weblock":[1,0],"framework":[0],"allow":[0],"you":[1,0],"to":[1,0],"defin":[1,0],"should":[0],"be\nshown":[0],"the":[1,0],"dependen":[0],"on":[1,0],"URL":[1,0],"'s":[0],"path.":[0],"The":[0],"main":[0],"entry-point":[0],"is":[1,0],"defrout":[0],"macro.":[0],"Use":[0],"it":[1,0],"a":[1,0],"subclass":[0],"of\nnavig":[0],"and":[1,0],"then":[0],"return":[1,0],"thi":[1,0],"from":[0],"session":[0],"initialization\nmethod":[0],"of":[1,0],"your":[0],"application.":[0],"Introduct":[0],"API":[0],"Defin":[0],"new":[1,0],"class":[0],"with":[1,0],"name":[0],"CLASS-NAME":[0],"inherit":[0],"navigation-widget":[0],".":[1,0],"And":[0],"function":[1,0],"make-{class-name}":[0],"make":[0],"instanc":[0],"class.":[1,0],"Each":[0],"entri":[0],"in":[0],"rule":[1,0],"be":[1,0],"list":[0],"two":[0],"items.":[0],"First":[0],"item":[0],"regex":[1,0],"pattern":[0],"match":[0],"path.\nSecond":[0],"form":[0],"creat":[0],"widget.":[0],"will":[1,0],"onli":[0],"if":[1,0],"\nwa":[0],"changed.":[0],"Here":[0],"exampl":[0],"rules:":[0],"(defrout":[0],"tasks-routes\n":[0],"(\"/tasks/d+\"":[0],"(make-task-page))\n":[0],"(\"/tasks/\"":[0],"(make-task-list":[0],"\"Make":[0],"my":[0],"first":[0],"app\"\n":[0],"\"Deploi":[0],"somewhere\"\n":[0],"\"Have":[0],"profit\")))":[0],"With":[0],"these":[0],"rules,":[0],"open":[0],"/tasks/":[0],"by":[0],"MAKE-TASK-LIST":[0],"\nwill":[0],"set":[0],"as":[0],"current-widget":[0],"shown":[0],"user.":[0],"If":[0],"click":[0],"some":[0],"task\nand":[0],"/tasks/100500":[0],"task":[0],"call\nto":[0],"MAKE-TASK-PAGE":[0],"Pai":[0],"attent":[0],"that":[1,0],"creation":[0],"respons":[0],"extract":[0],"parameters\nfrom":[0],"In":[0],"abov":[0],"case,":[0],"call":[0],"WEBLOCKS/REQUEST:GET-PATH":[0],"and\npars":[0],"path":[0],"task'":[0],"id.":[0],"Probabl":[0],"futur":[0],"catch\nmatch":[0],"pieces.":[0],"Base":[0],"all":[0],"navig":[1,0],"widgets.":[0],"When":[0],"render":[0],"track":[0],"wa":[1,0],"and\ncreat":[0],"child":[0],"accord":[0],"given":[0],"rules.":[0],"Usualli":[0],"don't":[0],"want":[0],"manually,\nbut":[0],"instead":[0],"us":[1,0],"Navig":[0],"Widget":[0],"Remov":[1],"MAKE-NAVIGATION-WIDGET":[1],"Export":[1],"symbols,":[1],"relat":[1],"Added":[1],"documentation.":[1],"(2021-10-19)":[1],"Move":[1],"WEBLOCKS-UI/CORE:UI-WIDGET":[1],"becaus":[1],"WEBLOCKS-UI/CORE:WIDGET":[1],"\ni":[1],"deprec":[1],"remov":[1],"soon.":[1],"0.6.1":[1],"(2021-03-12)":[1],"Renam":[1],"DEFWIDGET":[1],"weblocks-navigation-widget:defrout":[1],"so":[1],"more":[1],"explicit\nand":[1],"doesn't":[1],"clash":[1],"WEBLOCKS/WIDGET:DEFWIDGET":[1],"0.6.0":[1],"(2019-07-23)":[1],"Function":[1],"WEBLOCKS/RESPONSE:ABORT-PROCESSING":[1],"replac":[1],"with\n":[1],"WEBLOCKS/RESPONSE:IMMEDIATE-RESPONSE":[1],"work":[1],">=":[1],"0.35.0":[1],"0.5.0":[1],"(2019-01-22)":[1],"Messag":[1],"\"Render":[1],"widget\"":[1],"now":[1],"log":[1],"DEBUG":[1],"level.":[1],"0.4.1":[1],"(2018-11-25)":[1],"packag":[1],"infer":[1],"0.4.0":[1],"(2018-02-04)":[1],"macro,":[1],"class,\nbas":[1],"navigation-widget,":[1],"along":[1],"a\n":[1],"make-<new-class>":[1],"function.":[1],"can":[1],"need":[1],"with\ncustom":[1],"WEBLOCKS/WIDGET:RENDER":[1],"method":[1],"or":[1],"attach":[1],"dependencies.":[1],"0.3.0":[1],"(2018-01-11)":[1],"Fix":[1],"0.22.0.":[1],"0.2.0":[1],"(2018-01-07)":[1],"Now":[1],"no":[1],"404.\nBut":[1],"redefin":[1],"behavior,":[1],"provid":[1],"t":[1],"\ninstead":[1],"regex.":[1],"0.1.1":[1],"(2017-12-10)":[1],"Basic":[1],"functionality.":[1],"0.1.0":[1],"ChangeLog":[1]},"titles":["Weblocks Navigation Widget","ChangeLog"],"titleterms":[]})