const sidebar = [
  {
    text: '个人申请总结',
    collapsible: true,
    children: [
      {
        text: '工学院',
        link: '/grad-application/college-of-engineering/',
        children: [],
      },
      {
        text: '商学院',
        link: '/grad-application/college-of-business/',
        children: [],
      },
      {
        text: '理学院',
        link: '/grad-application/college-of-science/',
        children: [],
      },
      {
        text: '人文社会科学院',
        link: '/grad-application/college-of-liberal-arts-and-social-sciences/',
        children: [],
      },
      {
        text: '创意媒体学院',
        link: '/grad-application/school-of-creative-media/',
        children: [],
      },
      {
        text: '赛马会动物医学及生命科学院',
        link: '/grad-application/veterinary-medicine-life-sciences/',
        children: [],
      },
      {
        text: '数据科学学院',
        link: '/grad-application/school-of-data-science/',
        children: [],
      },
      {
        text: '法律学院',
        link: '/grad-application/school-of-law/',
        children: [],
      },
    ],
  },
  {
    text: '海外项目',
    collapsible: true,
    children: [
      {
        text: '2+2',
        link: '/oversea/two-plus-two/',
        children: [],
      },
      {
        text: '交换与暑校',
        link: '/oversea/exchange/',
        children: [],
      },
      {
        text: '转学',
        link: '/oversea/transfer/',
        children: [],
      },
    ],
  },
  {
    text: '实习分享',
    collapsible: true,
    children: [
      {
        text: '互联网',
        link: '/internship/it/',
        children: ['/internship/it/[GSoC]-2018-fengyi.md'],
      },
      {
        text: '金融',
        link: '/internship/finance/',
        children: [],
      },
      {
        text: '校内兼职',
        link: '/internship/campus/',
        children: [],
      },
    ],
  },
  {
    text: '科研',
    collapsible: true,
    children: [
      {
        text: '校内',
        link: '/research/on-campus/',
        children: [
          '/research/on-campus/[CS]-2018-zhangjingwei.md',
          '/research/on-campus/[MA]-2019-dutao.md',
        ],
      },
      {
        text: '暑研',
        link: '/research/summer/',
        children: [],
      },
    ],
  },
  {
    text: '转专业与多主修辅修',
    collapsible: true,
    children: [
      {
        text: '转专业',
        link: '/major-minor/change-major/',
        children: [
          '/major-minor/change-major/[ACE2CS]-2018-zhangjingwei.md',
          '/major-minor/change-major/[MNE2CS]-2018-wangyujia.md',
        ],
      },
      {
        text: '多主修辅修',
        link: '/major-minor/multi-major-minor/',
        children: [],
      },
    ],
  },
  {
    text: '奖学金申请',
    collapsible: true,
    children: [
      {
        text: '校内奖学金',
        link: '/scholarship/on-campus/',
        children: [],
      },
      {
        text: '外部奖学金',
        link: '/scholarship/off-campus/',
        children: [],
      },
    ],
  },
  {
    text: '语言学习',
    collapsible: true,
    children: [
      {
        text: 'GRE',
        link: '/language/gre/',
        children: [],
      },
      {
        text: 'TOEFL',
        link: '/language/toefl/',
        children: ['/language/toefl/[CS]-2018-fengyi.md'],
      },
      {
        text: 'IELTS',
        link: '/language/ielts/',
        children: [],
      },
      {
        text: '粤语',
        link: '/language/cantonese/',
        children: [],
      },
    ],
  },
  {
    text: '其他',
    collapsible: true,
    children: ['/others/'],
  },
];

exports.sidebar = sidebar;
