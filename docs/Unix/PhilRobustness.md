# Unix哲学之健壮原则
*《UNIX编辑艺术》读书笔记*
- - - -
*【声明】读书笔记包括原文摘抄和个人思考心得，原文一切版权归本书作者所有*

> 健壮源于透明与简洁  

正文摘抄：
1. 软件的健壮性指软件不仅能在正常情况下运行良好，也能在超出设计者设想的意外条件下也能够运行良好
2. ……如果不能够正确理解一个程序的逻辑，就不能确信其是否正确，也就不能再出错的时候修复它。
3. 在有异常输入的情况下，保证软件健壮性的一个相当重要的策略就是避免在代码中出现特例。bug通常隐藏在处理特例的代码以及处理不同特殊情况的交互操作部分的代码中。
4. ……如果“怎么回事”（透明性）不算复杂，即人们不需要绞尽脑汁就能推断出所有可能的情况，那么这个程序就是简洁的。程序越简洁，越透明，也就越健壮

理解及感受：

健壮性是评判程序优劣的一个重要标准，这里的健壮原则感觉还是为了强调程序的简洁。健壮是目的，手段就是简洁和透明。