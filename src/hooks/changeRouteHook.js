import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

export const changeRoute = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  console.log(router)
  const currentQuery = router.query
  useEffect(() => {
    const handleRouteChange = (url) => {
        console.log(`Route to ${url} was cancelled! ${currentQuery.page}`)
        router.reload()
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [dispatch])
};
