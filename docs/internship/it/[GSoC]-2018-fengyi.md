---
sidebar: auto
prev: /internship/it/
---

# Google Summer of Code 2021

> Author: FENG Yi

> 项目时长: 10 Weeks
>
> 工时: About 175 hours
>
> 薪酬: 2400 USD
>
> 地点: Remote

## 什么是 GSoC?

以下为[官网](https://summerofcode.withgoogle.com/)对 GSoC 2022 的描述：

> Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors.

长话短说，这是一个 Open Source Developer 的工作。

会在一个开源社区 Mentor(s) 的指导下，为这个社区做一个 project，香港的学生会拿到`2400 USD`的 stipend。会有两次**Evaluation**, 通过第一次可以到 40%左右的薪酬，第二次通过拿到剩余的和通过证书。

以下为我被录取时收到的 email：

:::details
Yi will work as a Student Developer beginning June 7, 2021 and ending on August 16, 2021, developing open source software for Halide.

Yi is expected to spend an average of 17+ hours a week working on their project over 10 weeks.

Yi will work from home on their project and will not be required to visit either Google or Halide’s offices.

The Google Summer of Code program is administered by Google. Yi will not be directly employed by Google during participation in Google Summer of Code 2021.
:::

## 项目流程

可通过[这个链接](https://developers.google.com/open-source/gsoc/timeline)访问了解。简单描述:

- 开源社区报名
- 公布通过的开源社区名单
- 学生与社区联系，根据该社区的`ideas list`或提出新的项目，并攥写`proposal`
- 如果你的`proposal`通过了社区的审核，你就成功的被录取
- 与社区破冰
- 写代码
- 第一次审核
- 写代码
- 第二次审核
- 发证书

## 申请经历与经验

只分享下我自己的申请经验供大家借鉴。

### 找项目

**不要在公布 Organizations List 之后才行动！** 先去看往年的 [记录](https://summerofcode.withgoogle.com/archive/)，看看是否有你想要参与的项目。一般大的项目比如 Apache 的 slots 都比较多，当然竞争也比较激烈。

同样也建议大家多在 GitHub 找找。有些社区也会提前放出他们用来申请的 Idea List, 比如我参与的是`Halide`的项目，是我在乱逛 GitHub 的时候发现他们写了 Wiki，正好有一个项目很符合我的技术栈与兴趣。

建议在前一年的 12 月或者 1 月就开始行动，去交一交 PR，提 Issue，Review PR 等等，混个脸熟。

### 联系 mentor

我是在公布 Organizations List 之前就开始联系 mentor 了。因此我只能用往年`Archive`里面的联系方式，但是**大概率**他们不会再 in charge 一年，比如我当时联系了`Webpack`的 mentor，就没有收到回复。

幸运的是[Halide](https://github.com/halide/Halide/wiki/%5BGSoC-2021%5D-Performance-Tracking-in-CI)的 Wiki 里面写了 Mentor 的联系方式，我就把自己的 cv 和一些 in production 的项目一并发给了他，并表示对这个项目很感兴趣。他的回复也很积极，但也表示不确定他们自己能不能被选上，然后给了我一个十分详细的项目描述。

现在我也不是很确定提前联系他们是不是一个正确的决定吧，但态度好一些，多沟通一下总没错。

### Proposal

之后 Alex 就通知我他们被选上了，并且给了我一些任务。大概是把`Halide`的所有 test case 跑通，然后处理下生成的 xml 文件，最后做个网站把数据 visualize 下。

完成之后就是写 proposal 了。要在 proposal 中表现出来你对这个项目的理解是正确的，写出你的 design 和一些 implementation 的实现思路，和 expected timeline，最后介绍下自己的个人能力能够胜任。

:::tip
写的时候多和 mentor 沟通，确保自己的理解没错。并且一定要考虑**工作量**，留出点 buffer time。最好最后提交前先让 mentor 确认确认。
:::

## 项目优点

1. Fully Remote
2. 工作时间弹性
3. 了解并参与开源社区贡献
4. 极大的开拓眼界和技术能力提升
5. 之后申请 Google 的工作时，会显示你成功通过了 GSoC，算是个重量级内推

## 项目缺点

但是以下几个缺点非常关键:

:::warning

1. 你并没有受聘于 Google，或者说都不是一份工作，只是参与了这个项目并且拿到补贴而已
2. 很多技术上的问题要靠自己解决
3. 表面预估工作时间不长，但真正干活写 Docs，沟通等很耗时间
4. 没过 Evaluation 的话全白干。但比例很低，其实只要你**不消失**的话，不会为难你的。

:::

我选择参与这个项目主要是以下几点原因:

- 我对 Open Source 有极大的兴趣和热爱
- Summer 想回家并且天天在家里呆着陪家人
- 有一篇 Paper 在做，还有 TOEFL、GRE 要考，以及准备申请。自认为没能力做一份全职的工作

**总体来说还是一份相当香的工作，如果对自己的能力有自信甚至可以同时找一份全职工作。**

## 写在最后

希望大家能够自信的参与这个项目，不要过于担心自己的技术不够。多和社区与 mentor 们沟通，你的申请成功率会大大提升。这既是一个完美的镀金项目，全世界一年也就 1k 人左右能通过，又是很好的学习机会，钱也很多，何乐而不为呢。

快结束的时候 Alex 回去看家人放假了，没时间 integrate backend 对我来说是个遗憾吧，但至少获得了很多技术上的提升，更关键的是，接触到了一些顶级开发者，开拓了眼界并且真正的参与了开源社区的贡献，算是为这个世界输出了一点自己的东西吧。

最后，希望这个项目能成为大家独一无二的体验吧，以及，Welcome to Open Source！
