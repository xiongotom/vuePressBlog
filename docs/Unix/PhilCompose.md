# Unix哲学之组合原则
*《UNIX编程艺术》读书笔记*
---
*【声明】读书笔记包括原文摘抄和个人思考心得，原文一切版权归本书作者所有*
---
> 设计时考虑拼接组合

正文摘抄：
1. 如果程序彼此间不能有效通讯，那么软件就难免陷入复杂度的泥沼。
2. 在输入输出方面，Unix传统极力提倡采用简单、文本化、面向流、设备无关的格式。
3. Unix中，文本流之于工具，就如同在面向对象的环境中的消息之于对象。
4. GUI是个好东西。有时竭尽所能也不可避免复杂的二进制数据格式。但在做一个GUI前，最好还是应该想想可不可以把复杂的交互程序跟干粗活的算法程序分离开，每个部分单独成为一块，然后用一个简单的命令流或者是应用协议将其组合在一起。

理解和感受：
这个原则重点在于通讯，各个程序或者模块之间要能方便有效的交流，但同时也要确保各自的独立性：输入和输出是简单明了的，但内部的实现跟外界无关。这里也提到了Unix对应文本化的喜爱，文本可读、易于他人的理解，这也是开源精神的一种体现吧。