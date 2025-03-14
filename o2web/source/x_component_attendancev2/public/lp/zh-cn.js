MWF.xApplication.attendancev2.LP = {
  title: "考勤管理",

  menu: {
    // 我的
    myAttendance: "我的考勤",
    myStatistic: "我的统计",
    myAppealList: "我的考勤异常",
    // 统计考勤
    statistic: "考勤统计",
    detailStatisticFilter: "汇总统计",
    detailFilter: "每日统计",
    recordList: "原始记录",
    appealList: "异常数据",
    // 管理配置
    config: "配置",
    shiftManager: "班次管理",
    groupmanager: "考勤组管理",
    addressmanger: "工作场所管理",
    leavemanager: "外出请假记录",
    configmanager: "配置管理",
  },

  alert: "提示",
  operate: "操作",
  choose: "选择",
  save: "保存",
  delete: "删除",
  update: "修改",
  search: "搜索",
  statisticExport: "导出(递归)",
  positive: "确定",
  cancel: "取消",
  add: "添加",
  more: "更多",
  dataError: "数据错误！",
  saveSuccess: "保存成功！",
  onDuty: "上班打卡",
  onDutySimple: "上班",
  offDuty: "下班打卡",
  offDutySimple: "下班",
  yes: "是",
  no: "否",
  firstPage: "第一页",
  lastPage: "最后一页",
  until: "至",
  day: {
    Sunday: "周日",
    Monday: "周一",
    Tuesday: "周二",
    Wednesday: "周三",
    Thursday: "周四",
    Friday: "周五",
    Saturday: "周六",
  },
  month: "月",
  year: "年",
  minute: "分钟",
  hour: "小时",
  classifierDay: "天",
  times: "次",
  // 组件
  components: {
    chooseTimePlaceholder: "请选择时间",
    timeMinutesSelectorClosePlaceholder: "关闭",
    timeMinutesSelectorHour: "小时",
    timeMinutesSelectorMinute: "分钟",
    chooseDatePlaceholder: "请选择日期",
    selectPlaceholder: "请选择",
    selectOrgPersonOverCount: "只能选择({count})个数据！",
  },
  // 我的
  myAttendanceTitle: "我的统计",
  myAttendanceCalendar: "考勤日历",
  myAttendanceStatistic: "考勤统计",
  myFieldWork: "外勤",
  myStatistic: {
    title: "考勤周期：",
    averageWorkTimeDuration: "平均工时（小时）",
    workTimeDuration: "工作时长（分钟）",
    attendance: "出勤（天）",
    nosignTimes: "缺卡（次）",
    lateTimes: "迟到（次）",
    leaveEarlierTimes: "早退（次）",
    leaveDays: "请假（天）",
    absenteeismDays: "旷工（天）",
    fieldWorkTimes: "外勤（次）",
  },

  // 班次
  shiftTitle: "班次管理",
  addShift: "新增班次",
  editShift: "修改班次",
  shiftName: "班次名称",
  checkInTime: "考勤时间",
  shiftSelector: "选择班次",
  shiftForm: {
    shiftNameLabel: "班次名称",
    shiftNameLabelPlaceholder: "请输入班次名称",
    checkInTimeLabel: "上下班时间",
    seriousTardinessLateMinutesLabel: "严重迟到分钟数",
    absenteeismLateMinutesLabel: "旷工迟到分钟数",
    seriousTardinessLateMinutesNeedNumber: "严重迟到分钟数必须是数字！",
    absenteeismLateMinutesNeedNumber: "旷工迟到分钟数必须是数字！",
    firstTimeLabel: "第1次上下班",
    secondTimeLabel: "第2次上下班",
    thirdTimeLabel: "第3次上下班",
    oneTimeDayLabel: "1天1次上下班",
    secondTimeDayLabel: "1天2次上下班",
    thirdTimeDayLabel: "1天3次上下班",
    onDutyTimeLabel: "上班时间:",
    beforeOnDutyTimeLabel: "打卡时段: ",
    beforeOnDutyTimePlaceholder: "请选择上班前时间",
    afterOnDutyTimePlaceholder: "请选择上班后时间",
    afterOnDutyTimeLabel: "上班后",
    offDutyTimeLabel: "下班时间:",
    beforeOffDutyTimeLabel: "打卡时段: ",
    beforeOffDutyTimePlaceholder: "请选择下班前时间",
    afterOffDutyTimePlaceholder: "请选择下班后时间",
    afterOffDutyTimeLabel: "下班后",
    lateAndEarlyOnTimeLabel1: "上班最多可晚到：",
    lateAndEarlyOnTimeLabel2: " 不算迟到",
    lateAndEarlyOffTimeLabel1: "下班最多可早走：",
    lateAndEarlyOffTimeLabel2: " 不算早退",
    shiftNameNotEmpty: "班次名称不能为空！",
    onDutyTimeNotEmpty: "上班时间不能为空！",
    offDutyTimeNotEmpty: "下班时间不能为空！",
    success: "保存成功！",
    confirmDelete: "确认要删除这条【{name}】信息？",
    selectShiftEmpty: "请选择一个班次",
    workTimeLabel: "班次工时",
    workTimeTotal: "合计工作时长",
    needWorkTimeLimit: "时长不足是否记为早退",
  },

  // 工作场所
  workAddressManagerTitle: "工作场所管理",
  workAddressSelector: "选择工作场所",
  workAddressAdd: "新建工作场所",
  workAddressName: "场所名称",
  workAddressRange: "误差范围",
  workAddressDesc: "备注",
  workAddressBDkeyConfigBtn: "设置百度开发者认证",
  workAddressBDkeyConfig: "百度开发者认证",
  workAddressBDkeyConfigDesc:
    "工作场所管理使用了百度地图开放平台的服务，你可以注册百度开发者认证来提高地图的并发量。认证完成后，请将密钥填至下方的输入框。",
  workAddressBDLinkTitle: "点此打开认证通道",
  workAddressBDLink: "https://lbsyun.baidu.com/apiconsole/auth",
  workAddressBDSecretTitle: "密钥(AK)",
  workAddressBDSecretTitlePlaceholder: "请输入百度地图应用的密钥(AK)",
  workAddressForm: {
    lnglatNotEmpty: "请先在地图上选择工作场所！",
    title: "场所名称",
    titlePlaceholder: "请输入场所名称",
    titleNotEmpty: "场所名称不能为空！",
    range: "打卡范围(米)",
    rangePlaceholder: "请输入打卡范围(米)",
    rangeNotEmpty: "打卡范围(米)不能为空！",
    desc: "备注",
    descPlaceholder: "请输入备注信息",
    rangeNeedNumber: "打卡范围(米)必须是数字！",
    success: "保存成功！",
    confirmDelete: "确认要删除这个【{name}】工作场所？",
    selectWorkAddressEmpty: "请选择至少选择一个工作场所",
  },
  // 考勤组
  groupManagerTitle: "考勤组管理",
  groupAdd: "新增考勤组",
  groupUpdate: "修改考勤组",
  groupForm: {
    title: "考勤组名称",
    titlePlaceholder: "请输入考勤组名称",
    titleErrorNotEmpty: "考勤组名称不能为空！",
    num: "人数",
    checkType: "考勤类型",
    checkTypeError: "考勤类型不正确！",
    checkTypeFix: "固定班制",
    checkTypeFree: "自由工时",
    tableThDay: "工作日",
    tableThShift: "班次",
    time: "工作日设置",
    timeErrorNotEmpty: "请选择工作日！",
    participates: "参与考勤人员、组织",
    participatesPlaceholder: "请点击选择参与考勤人员、组织",
    participatesErrorNotEmtpy: "参与考勤人员、组织不能为空！",
    unParticipates: "无需参与考勤人员",
    unParticipatesPlaceholder: "请点击选择无需参与考勤人员",
    shift: "班次",
    shiftChange: "更改班次",
    shiftChangeMultiple: "批量更改班次",
    shiftEmpty: "休息",
    shiftPlaceholder: "(请点击选择班次)",
    shiftErrorNotEmpty: "工作日班次不能为空！",
    workPlace: "工作场所",
    workPlacePlaceholder: "请选择工作场所",
    workPlaceErrorNotEmpty: "工作场所不能为空！",
    fieldWork: "外勤打卡",
    allowFieldWork: "是否允许外勤打卡",
    requiredFieldWorkRemarks: "外勤打卡备注是否必填",
    fieldWorkMarkError: "外勤打卡是否作为异常数据处理",
    requiredCheckInDate: "必须打卡的日期",
    requiredCheckInDateThDate: "日期",
    requiredCheckInDateThShift: "班次",
    requiredCheckInDateThCycle: "周期",
    requiredCheckInDatePlaceholder: "请添加必须打卡的日期",
    noNeedCheckInDate: "无需打卡的日期",
    noNeedCheckInDatePlaceholder: "请添加无需打卡的日期",
    confirmDelete: "确认要删除这个【{name}】考勤组？",
  },
  dateCycle: {
    none: "无",
    week: "每周",
    twoWeek: "每两周",
    month: "每月",
  },
  // 考勤信息
  detailManagerTitle: "考勤统计",
  detailTable: {
    filterSelectTitle: "查询的人员",
    filterEmptyPlaceholder: "请选择需要查询人员!",
    person: "姓名",
    groupName: "考勤组",
    shiftName: "班次",
    date: "日期",
    attendance: "出勤天数",
    rest: "休息天数",
    leave: "请假天数",
    absenteeismDays: "旷工天数",
    workTimeDuration: "工作时长",
    averageWorkTimeDuration: "平均工时",
    lateTimes: "迟到次数",
    lateTimeDuration: "迟到时长(分钟)",
    leaveEarlierTimes: "早退次数",
    leaveEarlierTimeDuration: "早退时长(分钟)",
    onDutyAbsenceTimes: "上班缺卡次数",
    offDutyAbsenceTimes: "下班缺卡次数",
    absenceTimes: "缺卡次数",
    fieldWorkTimes: "外勤次数",
    btnRecordList: "打卡记录",
  },
  detailExportExcelFileSuccess: "数据已经统计完成，点击确定下载Excel文件！",
  detailExportConfirmMsg: "导出操作比较耗时，请等待一会儿！",
  detailStatisticList: {
    filterEmptyPlaceholder: "请选择需要查询人员或组织!",
    filterSelectTitle: "查询统计的人员或组织",
    participatesPlaceholder: "请点击选择参与考勤人员、组织",
    participatesErrorNotEmtpy: "参与考勤人员、组织不能为空！",
    startDateEmptyPlaceholder: "请选择开始日期!",
    endDateEmptyPlaceholder: "请选择结束日期!",
  },
  detailRecordList: {
    title: "打卡记录",
    dutyTitle: "打卡类型",
    time: "打卡时间",
    result: "打卡结果",
    address: "打卡地址",
    signDesc: "外勤说明",
  },

  // 配置信息
  configManagerTitle: "考勤配置",
  config: {
    holidays: "节假日",
    holidayLabels: "设置节假日，将原本为工作日的日期添加到此处，作为节假日",
    workdays: "工作日",
    workdayLabels: "设置工作日，将原本为非工作日的日期添加到此处，作为工作日",
    appealConfig: "补卡申请配置",
    appealEnableLabel: "是否启用补卡申请功能",
    appealProcessTypeInnerLabel: "内置固定流程",
    appealProcessTypeProcessLabel: "自定义流程",
    appealProcessTypeProcessPlaceholder: "请选择自定义流程",
    appealMaxTimesLabel: "用户每月最多申诉次数",
    appealMaxTimesError: "请输入正确的申诉次数！",
    fastCheckIn: "极速打卡",
    onDutyFastCheckInEnable: "是否启用上班极速打卡 (app端有效)",
    offDutyFastCheckInEnable: "是否启用下班极速打卡 (app端有效)",
    checkInAlert: "打卡提醒",
    checkInAlertEnable:
      "是否启用打卡提醒 (上班前10分钟、下班时会收到提醒消息，不要忘记打卡)",
    exceptionAlertEnable: "是否启用异常打卡提醒 ",
    exceptionAlertEnableTime1: " (次日 ",
    exceptionAlertEnableTime2: " 将收到异常打卡消息) ",
  },
  // 请假外出记录
  leaveManagerTitle: "外出请假记录",
  leave: {
    personName: "人员名称",
    leaveType: "类型",
    startTime: "开始时间",
    endTime: "结束时间",
    leaveDays: "天数",
    desc: "说明",
    excelTemplate: "Excel模版下载",
    importExcel: "导入Excel",
    importExcelFileError: "只能导入Excel文件！",
    importExcelFileSuccess: "导入完成，点击确定下载查看导入结果！",
    deleteConfirm: "确定要删除这条记录数据吗？",
  },

  // 申诉
  appealManagerTitle: "考勤异常数据",
  appeal: {
    date: "日期",
    dutyType: "打卡类型",
    recordTime: "打卡时间",
    recordResult: "打卡结果",
    status: "状态",

    normal: "正常",
    absenteeism: "旷工迟到",
    early: "早退",
    late: "迟到",
    seriousLate: "严重迟到",
    notSigned: "缺卡",
    appeal: "申诉成功",
    fieldWork: "外勤打卡",
    leave: "请假",

    status0: "待处理",
    status1: "流转中",
    status2: "审批通过",
    status3: "审批不通过",
    status4: "已处理",

    startProcess: "发起申诉",
    openJob: "查看申诉",
    startProcessNoConfigError: "没有配置申诉流程，无法启动流程！",
    notfoundJobError: "没有找到对应的流程数据，是否还原当前的数据状态？",
    dealAppeal: "处理",
    confirmDealAppeal: "确认要把这条数据设置为正常？",
  },

  // 原始打卡记录
  recordManagerTitle: "原始记录",
  record: {
    detailTitle: "记录详情",
    name: "姓名",
    group: "考勤组",
    shift: "班次",
    dutyTime: "考勤时间",
    checkInType: "考勤类型",
    recordDate: "打卡时间",
    sourceType: "数据来源",
    checkInResult: "打卡结果",
    fieldWork: "是否外勤打卡",
    fieldWorkDesc: "外勤说明",
    fieldWorkAddress: "打卡地址",
    sourceTypeUser: "用户打卡",
    sourceTypeAuto: "系统生成",
    sourceTypeFast: "极速打卡",
    sourceTypeImport: "数据导入",
    importExcelFileSuccess:
      "导入完成，错误数据{number}条，点击确定下载查看导入结果！",
    searchDateError: "起止日期必须都为空或者都有值！",
  },

  /// mobile

  mobile: {
    menu: {
      checkIn: "打卡",
      statistic: "统计",
      settings: "设置",
    },
    unCheckIn: "未打卡",
    refreshLocation: "[刷新定位]",
    locationIng: "定位中.......",
    locationError: "定位失败，请开启定位权限！",
    checkInWithTime: "已打卡{time}",
    updateCheckInBtn: "更新打卡",
    outsideTitle: "外勤打卡",
    outsideNotAllow: "不允许外勤打卡！",
    outsideRemarkPlaceholder: "请输入外勤打卡说明！",
    statisticMonthLabel: "月",
  },
};
