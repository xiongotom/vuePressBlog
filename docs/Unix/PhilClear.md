# Unix哲学之清晰原则
*《UNIX编程艺术》读书笔记*
---
*【声明】读书笔记包括原文摘抄和个人思考心得，原文一切版权归本书作者所有*
---
> 清晰胜于机巧

正文摘抄：
1. 维护如此重要而成本如此高昂；在写程序时，要想到你不是给写执行代码的计算机看的，而是给人--将来阅读维护源码的人，包括你自己--看的。
2. ...这个建议不仅仅只是代码注释，良好的Unix实践同样信奉算法和实现时就应该考虑到将来的可拓展性…

理解和感受：
首先要有良好的代码规范，并实践之。现在辅助代码规范的工具很多，更加应该做好这一点；
其次不要过于追求代码的简洁，或者使用看似简单，实则难以理解的代码；
最后就是算法和实现中的清晰简单，这个最难做到。因为事情往往考虑不全面，后面打补丁，越搞越复杂；或者是一开始想的过于复杂，钻牛角尖，实现起来累，其实效果还不一定好，也破坏了清晰原则。
对于最后这一点，尤其要注意，避免挖坑。