
import React, { useState } from 'react'
import {
  makeStyles
} from '@material-ui/core'
import { lang } from '@cesce/arq'
import { DashboardContent } from './DashboardContent/DashboardContent'
import { DashboardMenu } from './DashboardMenu/DashboardMenu'
import { IPageTypes } from './DashboardContent/types'
import {
  UserMenu,
  userDataFaker,
  applicationsFaker
} from '@cesce/ui-catalogue'

const useStyles = makeStyles(() => ({
  divContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    border: '10px solid black',
    padding: 0,
    height: '95%'
  },
  divMenu: {
    height: '95%'
  },
  root: {
    background: '#E0E5F1',
    display: 'flex',
    minHeight: '98vh',
    flexDirection: 'row',
    margin: '0'
  },
  content: {
    width: '100%'
  },
  navegator: {
    flex: '0'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: '5',
    maxWidth: '87%'
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'max-content',
    flexDirection: 'row'
  },
  header: {
    background: '#ffffff',
    width: '100%'
  },
  footer: {

  }
}))
const Dashboard: any = () => {
  const i18n = lang.currentLanguage()
  const classes = useStyles()
  const [page, setPage] = useState(IPageTypes.NOTHING)

  const handleSetPage = (selected): void => {
    setPage(selected)
  }

  return (
    <div className={classes.root}>
      <nav className={classes.navegator}>
        <UserMenu
          i18n={i18n}
          userData={userDataFaker}
          applications= {applicationsFaker}
          logo={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUEhgUFRUUGBgYGxgbHBsaGxkYHRgbIBobGRsdGhUbIC0lGyYpHhsZJTclLC4yNDY0GiQ5PzkxPi0yNDABCwsLEA8QHhISHjspIyk2Mj4yNTA7Ozs7MjA7NDIwOzIyMDA1NTAyMjIyPjQyMjIyMjIyMjIyMjIyNTsyMjIwMv/AABEIAJgBSwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xABFEAACAQMBBAYGBwYFAgcAAAABAgADBBESBQYhMQcTQVFhcSIygZGSoSNSVGJygrEUFhdCk9FDorLB09LwFSQzc6Ozwv/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACYRAAICAQQBAwUBAAAAAAAAAAABAgMRBBIhMUETcZEFFCJCUcH/2gAMAwEAAhEDEQA/ALmiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiJxAOYnE5gCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiJ8MwAyeAEA+podrby0KGVyXcfyr2H7zch5cT4TQbw7zNUJp0WKpyLjgW/CexfmfLnFys206TKzL4PNu16T2w+TeX2+N0/qaKY+6NTe1m4fITTV9t3bc7it+VmX5LidDCdDia1VCPSKPWnLtmQu3rxOVxW9rl/8AVmbG03/vKZHWCnVXtyNDexl4D4TI9UmLVE5KqD7RONs10y3dg742t0QgJp1D/I+ASfunk3lz8JJZ5wrCTfczf5qbLb3b6kPBarHinYBUPav3jxHbkcRkt0uFmPwa6tRniRbMTgGczGaxERAEREAREQBERAOJ03FwlNSzsqqObMQoHmTwkf3z3pp2FIHAeq+QlPPPvZu5R8+XiKO2xtm4uqnWV6jOeOAeCqO5U5KP+zmXV0ufPgpsuUePJelXffZinBuqR/DqYfEoImw2ft60uDijXpOfqhxq+Hn8pQVru1fVF107Wuy8wdDAEeBbGr2TAubarSfTUp1KbjiA6sjDxAYA+2W/bxfCZV68ly0en5gX+1ragVFatSpFs6dbqmrGM41HjjI980PR4161mrXbFtWDT1Z6zRjgXbtzzGeOOZOeEB6XbzXfpTB4U6ajyZizH/LolMK90tuS6Vm2O7BaX717O+2Wv9VP7x+9Wzvtlr/VT+8oLZ+xbm4UtRo1KiqcEquQDjOCfIiZf7pbR+yV/hMtdEF+xSr5PpF/WG0aFdS1GrTqKDglGVgDgHBKngcEH2zvuLhKal3dUUcyxCgeZPCRHcK0Njsxnrq1Mg1atQMPSULw4j8CA+2VJvJvBXvapqVGOkE6KefRRewAdpxzbmfLAEIU7pNJ8ItldtSbXLLrffnZgbSbqnnwDkfEFx85tdn7XtrgZo1qVTHPQysR5gHInny33dvXTrEtq7IeIYIx1DnlRjLDxGZ17LsLlrpKVJaiV9QA9ZGQ8yxPNQBkk90m6I44ZUr5Z5R6WiYlDNKiOtqaiiDXUbC6sL6TnHAdplO747/1rl2pWzNToDhqXKvU8S3NVPYo44588CiFbk8IvnYorLLW2jvJZW501bikrDmuoFh5oMke6YtDfTZrnAu6Q/ESnzcCUFY2Fas2mjSqVCOYRGfHnpHDzMy77d+9orqq21ZV5lijFR5sOA9s0fbx6b5KPXk+UuD0fSqqwDKwYHiCCCCPAjnFRwoLEgAAkk8AAOJJMozo1e+N2q2zkU8hqobJp6O0sv1jyXHHPgDLW36u+q2dctnGabIPN/QH+qUTr2yUcl8bMx3YO/8AerZ32y1/q0/7x+9ezvtlr/VT+887UKTO6oilmYhVUcSxJwAB4mbj90to/ZK/wmXvTxXbKFqJPpF50t5bB2VFu7ZmYhVUVEJZicAAA8STwxNxKT3F3Vu02hRetb1ERCzFmXAyEbTx/Fpl2SiyKi8J5L65OSy1gSF767Yx/wCXQ9xqEdx4hfbzPs8ZK765WlSeo3JFLHxwM49vKVDVrs7MzHLMSxPiTky7S1bpZfgz6uxqO1eT7BgmdYaC09PJ43p85OGM6Kk7XaY7tOGiKOqpMWrNrY7LuLg4pU2bvbGFHm54DyzJjsno/RfSuX1kcdC5Ce1uDN8vbKbLoR7ZohVKXSKsqzCrTKqNmYdUy4iWp0Wbzmqv7HVbLIuaTHmyDmhPevDHh5Syp5k2dfvb1krU/XpsGHjjmD4EZB8CZ6TsrlatNKqHK1FV1PerAMPkZ5epr2yyvJ6Gnnujh+DJiImcvEREAREQBOJzMTaWeoqaeeh8eek4gHnvevbDXd5UrE5UsVp+FNSQmPP1vNjJ90Xbp0+rF7WQMzE9UrDIRQca8H+YkHHcAD28KoHKejt0GU7PtdOMdRSHDvCKD88zbe9sEkYqFum2zczC2hs2hXULWppUUEMA6hsEHIIzy/3HCZ0TFk2nE8575XfW7RuX7OsZR5JimPkk9CX9yKVJ6h5IjMfJQSf0nmFnJJZjknJJ7yeJM1aVctmTUvhIsrcLe+xsrTqqhqa2dnbShYccKvHPH0VEm+wd87S8rdTRNQtpL+khUBRgHjnvI98rOn0Y7RZQ30AyAcF2yM8ePoSYdHe51xZVatWv1eWRVTQxbhqy2cqMeqk5bGtptPk7W7E0muCWby2jVrOvST1npVFX8RU4HtOJ5vwQcEYIPEEciOwg/pPUsgm+HR9Su2atRYUqxyWyPQqHvYDip+8PaDI0WKPDJX1uXKO7djpAtLrTTqEUKvAaW4Ix5eg/LyU4PnJcban1gqaF1hSobA1BSQSurnjIBx4TzhtnY1xa1Oqr0yjdh5q471YcGH6Z44lg9FW89RqhsqrFxpLUmY5K6fWTJ5jHEd2COWMSspSW6PRGu1t7ZLk2HS7thqVulshINckvj6i44fmYr7FIlabsbFa9ukoAkA5Z2H8qD1iPHkB4sJKumPP7bS7upGPjfP8AtPvobZf2usDjUaXo9+Ay6se9ZZD8asohL8rcMtbZezqNvSWlRRUReQHb4k8yT2k8ZmxExZybTCstmUKOrqqaU9bam0ALqbGMnH/fPvMhfTDd6bKnTB41Kq58VVWY/wCbRLBlP9Mt3quaFL6lNnPm7Y/Sn85bSt00VXPEGRDdW8o0b2jWrZ0IxY4Go5CtowPx6ZbP8Ttm99b4D/eVVu5uxc32vqOr+j06tbFfW1YxgHPqn5Tefwu2l32/xt/0TTbGDlyzLU7EuFwXPZXK1aaVVzpdVZcjBwwBGR2cDMmdVGkERUXgFAUeQGBO2YTeRff640WZX67KvsGX/wDz85WqvLmv9n0q6haqBwp1AHOAcEZ9xMx6ewbReVvR+BT+omqm9VxxgyXadzeclSI+TgcT3DifdNhb7Huqnq0Kh8SNA+J8CWzRoIgwqqo7gAPkJ24kpax+ERjo15ZXVpuPcNxqOiDuGXP+w+ckNjudaU8FlNRu9zkfAML7wZJIlEr5y8l8NPCPg+KaAAAAADkAMAeQnL8j5GczSX28NBSaaE1HwchOKr2Zd/VHlxPhKJS2pyfguXeCrKW6L4Guqo4DgqlvmSP0naN0aA9Z6je1QPkJKnmO88OX1XVS/bHsb69DSvHyR5t27Qf4ZPm7/wCxllbm6RZoi8AhZAMk4AOQMnwIkLqyX7k/+g//ALh/0pL9HqbbLMTbfHkammEIZikvYksRE9cwCIiAIiIAnBE5iAect7dhvZ3b0iCEJLU27GQnhg949U+I8RNtuhv3VsU6lqYq0skqurSyZOTpbBBBOTpPb2iXFtvYdvd0urroGHNTyZT3q3MH9e3Mru/6JXzmjcqR2CopBHm6cD8ImuNsZRxMySqlGWYHdfdLS6fobVs99RwAPYoOr3iR7Y+/d1/4hTuLioSh9BkHooiMRkqngQrZ4k6cZmxtuie6J+kr0EHeodz7iF/WTbdvcSztCKmDVqjiHqYOk96IOC+fE+M43VFPHJ1K2TTfB2dIt51ezK5HN1CDx1sFP+UsfZKFtmUOhcEqGUsBzKggkD2Zl/b6buPf0ForVFMK4ckqXzhWUDAYY9bPskK/hFU+2L/SP/JFM4xWGzl0JSkmkbD+LVv9mrfEn95sd3+kOld3KW6UKqs+r0iVwoVSxJx5Y9sj38In+2L/AEj/AMk32524Jsbk12rip6DIAE0YJKnVnUewEY8ZGSpw8dk4+rlZ6MfpI3zNsDa27YrMAXYc6SkZAH3mHuBz2iaTZPSrVRAtxRFQgeujBWPiaeME+RA8JPd5N07W+H0qkOBgVEwrgdxOMMPAg8zjEgd50TVgformmw++rIR7V1Zit1NYkcmrU8x6NHvtvkdoBEWl1aU2LDJ1MxIxxIACjGeHHzmX0TbOapf9cAdFFGJPZqcFFXzILH8s22z+iV9QNe5UL2impJPk78B8Jlk7I2VQtaQpUUCqOPeSe1mY8WJ7zJWWQUdsTldcnLdIhnSzsJq1ulzTBLUNWsDmaZwSfHSQD5Fj2Sp9lbTq21Za1JtLoeHaCDwKsO0EcJ6akC3g6M7Wu5qUXNBm4lQoamT3hMgr7DjwkarUltl0dtpbe6PZrbbpaTT9JauG+66lT7WAI+cj28HSRd3ClKQFuh4HQxZyO7rMDT+UA+My6nRPeA+jWtyO8l1PuCH9ZuNk9FNNWDXNZnA/kQaAfAsSSR5YMszSuSGLXwb/AKONuG6slDkmpRxTcnmwAGls9uVxnxBlWdId31m065zkKVQeGlQCPi1e+XtYWNKhTFOlTWmg5KowPE+JPeeJlcX3RXUqVXqm8TLuzn6I82Ysf8TxldU4qbb4LLYScUlyaHcbfKjs+i6PSd2d9WpSoGkKqgcfEMfbJP8Axat/s1b4k/vNf/CJ/ti/0j/yR/CKp9sX+kf+SWS9GTy2VxVsVhIsjYe0Rc29OuEZBUXUFYgkDJAyR3jB9s2MxNmWYo0KdEcRTREB79Khc49ky5jeM8GtdciJ11ASpAODjgeBwe/B5ymdob27Up1HpPXKujFWCpTHEHHA6M4PMeBlldTn0V2WKHaLqzOmvcog1O6qO9iFHvMomtvDeP61zXPgHZR8KkCa96xY5YknvPE+8zQtG/LKHq/4i6b7fWwpf4wc91MF8/mHo/ORjafSY2CKFED71Q5/+NP+qV01SdLvL46WC75Kpaib64LhvFqVKatVqMdSg6eSnIz6g4e+aqvd21uMPUpp4EjJ/KOJkD2lvPd1vWqlRgDSnoDAGAMjj85o2eedd9Mne8WSxH+L/TVDWKvmKy/6yf3W+Nqvq9Y/kuke9iD8pp6++jH1aKj8Tk/IASKMZ1sZKH0fSw/XPuzkvqF0unj2N9W3suDyWkPyk/q0uHo6NRtnU6lTGqoXbgMcNRVeHiqg+2UNs2xe4r06CetUZUHhk8WPgBknwBnpqxtUpUkpIMLTVUUdyqAo+Qi3T01Y2JJk67bJ53NtGVERKy0REQBERAEREA1m3b1qFu9RQC40qgOSC7uqICBxI1MJ82tK9Dg1KtsydoSi6MeBxhmrMBxx2GazfOtRC29KtUFOnUrrqYv1eFpo9UemCCvppTAIOcsJ8Ld2tO0uqlnWNcpSdyBXe5IIRymNTsVyQeXPHhJJcEW+Tb7BvWr26Vm0+nrZdIIGgu3VHiTxKaSfHPLlMlbykUNQOuhdeWyNI0Eh8nswVYHuwZ1bGp01tqK02DItNAjKchlCgKQRzBHGRu3pGrWq2GD1dOu9WsccGSoRXSmD263ds/dpsD6wjCeQ21g391t20pECpXpqSofBYAhTyZh/KpweJwOBnN5este3pppIqmoWJ4/RohOVweetqYzx4EyLbX2+7ULlhWVaidcq2yKrVcKWRTV1ZIDcGyFAAcAFuBOwFIpdCihHWULDTRDH1yz6WIzz0mjSyezWO+d24Gcm5uNuWtNzTevSVhgMC4GknkG+rnsziZF3f0aQzUqIgwxyzBRhcajk9gyPeJGdm7WsqdktFcVKpTD2/Os9Vh6Yq0z6QZnJ1M3DiSTjjPrZezc3NtTq+m1laU+PNTUqHRq48yBQOM/WB5zm0ZZK6NVWUMpBVgCCO0EZB900u095LdKVY06tJ6lNKhVAwOp0UnQMHicjBA4jwmRvOan7FX6vXr6tsaM6wMcSmOOrGcY45xNBtO8sq1O2tbY03Rq9AAU8MtNUPWkMRwUlKbDSeJyeHAxFZEpYJNcbSpUgorVKaswzjPE4xqKrzwD29mZ0X+1ABQNE026+rTVW9ZWQhqjlSp4/Ro5B5Zxzke/aFp3Vy1W8W2dnGBUFL0qQRQnVs4yy5J4DkxbtMybSglK4sqOslSLuujOAheozBtITAwQlaqdOAQF8DGENxLGIAyeAE11pty0qsEp16TMc4AYHVjnp+tjwzMTe0A0FDAmj1tPrgAT9FnJ1AcSurRqH1dWeGZ20tu2bBjTq06gpI1QmmQ6oqjjl1yqnB4DOSM4GAZxIN8mVR2pbtU6tatNnIY6VYE4VijEgcgGUrnvBHZMWltmnUrolOrQZSHz6WpmYcNNPHonTxLHJ5Yx2jQnZz0tjhVDCpUWk9wygsxDuhuGC82whcAdygCZVgKFepSVL4V+qIqKlMUcLhSgy1NfQGGIxkZ4jvncI5lm9uNsW1Op1T1qav6PolgCNRwuR2ZPAZ5zE2btKpVp0nLUlNSpVwDnL0Vapo0cfW0CmxPLi3DlI4m2Lejs2urlWuCldq1LnUNUhtZdOYUcAGPAIFxwxNvs200XNvRHK1tACPGoyIp91Cp753GBuyzO2Pt+hctUWm9M6GIGlwxZQF9PA9UaiR+XPbO6225aVHCU69JmOdIDg6sc9P1sduMyLU6yvsxQMsOuU3arlmQPX6y4R1HpcNR1DHq57Jsdo31C6FKhaulUirQfVSIZaCU6i1GZnXgpKqUC5ydfLGYcVkJslkREgTOJWvShu4WH7bSXJUAVQO1RwD/lHA+GD2GWVPl1BGCMgydc3CW5EJwUlhnmfrI6yTvfjo/ekWuLRC9M5LUl4tT7yg/mXw5jxHKutU9WuyM1lHmzrcXhmQak62edWqcFpPJHB9lp8Ez5LT5LSLkdSOWadbGCZZu4nRyzstzeppUYKUTzbtBqDsX7nM9uBwNNliissthW5PCNn0TbqNSX9trKQ7rikp5qh5uR2FuGPu/ilmxE86UnJ5ZvjFRWEcxESJIREQBERAEREAREQBERAEREA4xOYiAIiIB84E+oiAIiIAnzgT6iAIiIAnAE5iAIiIAiIgHEie8m4lneE1CppVTzengaj95Twbz4HxksidjJp5RxxTWGUjtPovv6ZJpNTrr2YOhz5o/oj4jI5cbqbRT1rS4/Khqf/AF5npGMS9aqfkpenieb7fdLadT1bSv8AnQ0/9eJINmdFd/UINZqdBe3J6x/Yiej/AJpeETktTNnVRFEU3b3FsrMh1Q1Ko/xKmCQfur6qeYGfEyVxEpcm3llqSXRzEROHRERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//2Q=='}
        />
      </nav>
      <div className={classes.container}>
        <header className={classes.header}>
          <DashboardMenu
            i18n={i18n}
            handleSetPage={handleSetPage}
          />
        </header>
        <main className={classes.main}>
          <DashboardContent
            i18n={i18n}
            page={page}
          />
        </main>
      </div>
    </div>
  )
}

export { Dashboard }
