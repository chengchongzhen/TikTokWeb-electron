import { GetID, GetInfo } from './httpRequest'
import Login from './utils/login'

export default (ipcMain) => {
  // 获取作品ID
  ipcMain.handle('fetch-data', async (event, url) => {
    return GetID(url)
  })

  // 获取作品ID
  ipcMain.handle('GetInfo', async (event, id, dycookie) => {
    return GetInfo(id, dycookie)
  })

  ipcMain.handle('login', async () => {
    const login = new Login()
    return login.getQrCode()
  })
}
