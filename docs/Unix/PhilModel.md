# Unix哲学之模块原则
*《UNIX编辑艺术》读书笔记*
- - - -
> 使用简洁的接口拼合简单的部件  

正文摘抄：
1. 计算机编程的本质就是控制复杂度 —Brian Kernighan。
2. 排错往往占了大部分的开发时间，弄出一个拿得出手的可用系统，通常与其说出自才华横溢的设计成果，还不如说是跌跌撞撞的结果。
3. 要编制复杂软件而又不至于一败涂地的唯一方法就是降低其整体的复杂度 — 用清晰的接口把若干简单的模块组合成一个复杂软件。如此一来，多数问题就只会局限于某个局部，那么就还有希望对局部进行改进而不至牵动全身

自我理解和感受：
模块化这个原则其实到处都有听说过，也理想着在工作中实践之，只是实践途中总有些偏差。开发之前对于模块的准确划分，优秀的模块设计，开发过程中参与人员的准确理解。这些往往因为工期紧急（仓促设计），前期本身对于业务或者目标的不够熟悉，或者开发人员的理解偏差（开发流程不够规范）都会是产生偏差的原因。也许这也是“搬砖的”跟“工程师”的差别吧，仍需努力！！