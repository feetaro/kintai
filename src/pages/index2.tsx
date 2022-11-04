import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout1'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/slice/counterSlice'

import axios from 'axios'

import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


const Page: NextPageWithLayout = () => { 

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  //
  const aaa = async () => {
    const bbb = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(bbb.data);
  }

  return (
    <>
      <Head>
        <title>正体不明1</title>
      </Head>

      <p>index2のmain1</p>
      <p>index2のmain2</p>

      <Box w="100px" h="100px" bgColor="teal.400" p="2" onClick={() => {console.log('aaa')}}>
        I am Box.
      </Box>

      <div>
        <Button
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          onClick={() => dispatch(incrementByAmount(5))}>
          aaa
        </Button>
      </div>

      <div>
        <Button
          onClick={() => aaa()}>
          bbb
        </Button>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page