import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from 'src/components/Layout'

const Settings: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-row mb-5 text-3xl">
          <Link href="/">
              <a>Orders / </a>
          </Link>
          <h1 className='ml-2'>Settings</h1>
      </div>
      <div>

      </div>
    </Layout>
  )
}

export default Settings
