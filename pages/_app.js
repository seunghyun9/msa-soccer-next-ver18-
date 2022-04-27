import { wrapper } from '@/modules/store'
import { Header, Layout, Nav } from "@/components"
import { useEffect, useState } from 'react'
const App = ({ Component, pageProps}) => {
  const [showChild , setShowChild] = useState(false)
  useEffect(()=>{
    setShowChild(true)
  }, [])
  if(!showChild){
    return null
  }
  return (<>
  <Nav/>
    <Header/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default wrapper.withRedux(App)

  /** 
  App.propTypes = {
    Component: PropTypes.elementType.isRequired, // elementType = JSX , 엘리먼트 타입으로 작성하라 
    pageProps: PropTypes.any.isRequired //any << element만 아니면 된다. 자바스크립트의 JSON은 {},[] 둘다 사용 할수 있지만. 
  }
}
export default wrapper.withRedux(MyApp) // 앱을 리덕스로 감싼다. 데이터 전송에 필요한코드
*/