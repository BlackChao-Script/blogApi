module.exports = {
  //! 用户名或密码为空错误
  userFormateError: {
    code: '10001',
    message: '用户名或密码为空',
    result: '',
  },
  //! 用户已经存在错误
  userAlreadyExited: {
    code: '10002',
    message: '用户已经存在',
    result: '',
  },
  //! 用户注册错误
  userRegisterError: {
    code: '10003',
    message: '用户注册错误',
    result: '',
  },
  //! 用户不存在错误
  userNotExistence: {
    code: '10004',
    message: '用户不存在',
    result: '',
  },
  //! 用户登录失败错误
  userLoginError: {
    code: '10005',
    message: '用户登录失败',
    result: '',
  },
  //! 密码错误
  invalidPassword: {
    code: '10006',
    message: '密码不匹配',
    result: '',
  },
  //! token过期错误
  tokenExpiredError: {
    code: '10007',
    message: 'token已过期',
    result: '',
  },
  //! token无效错误
  invalidToken: {
    code: '10008',
    message: 'token已无效',
    result: '',
  },
  //! 修改密码失败错误
  updatePassowrdError: {
    code: '10009',
    message: '修改密码失败',
    result: '',
  },
  //! 没有管理员权限错误
  hadAdminPermissionError: {
    code: '10010',
    message: '该用户没有管理员权限',
    result: '',
  },
  //! 上传失败错误
  fileUploadError: {
    code: '10011',
    message: '上传失败',
    result: '',
  },
  //! 不支持该文件格式错误
  fileTypesError: {
    code: '10012',
    message: '不支持该格式文件',
    result: '',
  },
  //! markdown参数格式错误
  markdownFormatError: {
    code: '10013',
    message: 'markdown参数格式错误',
    result: '',
  },
  //! 上传markdown文件失败错误
  createMarkDownError: {
    code: '10014',
    message: '上传markdown文件失败',
    result: '',
  },
  //! 修改markdown文件错误
  modifyMdError: {
    code: '10015',
    message: '修改markdown文件错误',
    result: '',
  },
  //! markdown文件不存在错误
  invalidMdID: {
    code: '10016',
    message: 'markdown文件不存在',
    result: '',
  },
  //! 删除markdown文件失败错误
  removeMdError: {
    code: '10017',
    message: '参数markdown文件失败',
    result: '',
  },
  //! 获取分类数据文件失败错误
  findSortDatasError: {
    code: '10018',
    message: '获取分类数据文件失败',
    result: '',
  },
  //! 添加分类数据失败错误
  createSortError: {
    code: '100181',
    message: '添加分类数据失败',
    result: '',
  },
  //! 修改的分类不存在错误
  invalidSortID: {
    code: '100182',
    message: '该分类不存在',
    result: '',
  },
  //! 修改分类数据失败错误
  modifySortError: {
    code: '100183',
    message: '修改分类数据失败',
    result: '',
  },
  //! 删除分类数据失败错误
  removeSortError: {
    code: '100184',
    message: '删除分类数据失败',
    result: '',
  },
  //! 获取分类详细数据失败错误
  findSortDataDetsError: {
    code: '10019',
    message: '获取分类详细数据失败',
    result: '',
  },
  //! 轮播图参数格式错误
  validatorCarouselError: {
    code: '10020',
    message: '轮播图参数格式错误',
    result: '',
  },
  //! 上传轮播图失败错误
  createCarouselError: {
    code: '10021',
    message: '上传轮播图失败',
    result: '',
  },
  //! 获取轮播图数据失败错误
  getCarouselError: {
    code: '10022',
    message: '获取轮播图数据失败',
    result: '',
  },
  //! 轮播图不存在错误
  invalidCarouselID: {
    code: '10023',
    message: '修改的轮播图不存在',
    result: '',
  },
  //! 修改轮播图失败错误
  modifyCarousel: {
    code: '10024',
    message: '修改轮播图失败',
    result: '',
  },
  //! 删除轮播图失败错误
  removeCarouselError: {
    code: '10025',
    message: '删除轮播图失败错误',
  },
  //! 简介格式错误
  validatorIntroductionError: {
    code: '10026',
    message: '简介格式错误',
    result: '',
  },
  //! 上传简介失败错误
  createIntroductionError: {
    code: '10027',
    message: '上传简介失败',
    result: '',
  },
  //! 修改的简介数据不存在错误
  invalidIntroductionID: {
    code: '100271',
    message: '修改的简介不存在',
  },
  //! 修改简介失败
  modifyIntroductionError: {
    code: '100272',
    message: '修改简介失败',
  },
  //! 获取简介数据失败错误
  getIntroductionError: {
    code: '10028',
    message: '获取简介数据失败',
    result: '',
  },
  //! 获取图标数据失败错误
  getIconError: {
    code: '10029',
    message: '获取图标数据失败',
    result: '',
  },
  //! 修改的图标不存在错误
  invalidIconID: {
    code: '100291',
    message: '图标不存在',
    result: '',
  },
  //! 修改图标数据失败错误
  modifyIconError: {
    code: '100292',
    message: '修改图标错误',
  },
  //! 关于我的文件数据格式错误
  validatorMeError: {
    code: '10030',
    message: '关于我的文件数据格式错误',
    result: '',
  },
  //! 上传关于我的数据失败错误
  createAboutMeError: {
    code: '10031',
    message: '上传关于我的数据失败',
    result: '',
  },
  //! 修改关于我的数据失败错误
  modifyAboutMeError: {
    code: '10032',
    message: '修改关于我的数据失败错误',
    result: '',
  },
  //! 评论失败错误
  createLeaveWordError: {
    code: '10040',
    message: '评论失败',
    result: '',
  },
  //! 删除评论失败错误
  removeLeaveWordError: {
    code: '10041',
    message: '删除评论失败',
    result: '',
  },
}
