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

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Props = {
  item: string
}

const Page: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

console.log(process.env.NEXT_PUBLIC_FOO);
//console.log('item', props.item)

  //
  const aaa = async () => {
    //const bbb = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const bbb = await axios.get('https://script.google.com/macros/s/AKfycbyCLFsDozPaiUKm5UUQb1IeN3-4e2-LtBMUTpsStPyvuaqj-Q2oR-NT5lnTD-A0d7nRtw/exec');
  


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
        <p>{props.item}</p>
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

// SSR
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  //以下のconsole.logはブラウザで実行されない
  console.log("hello next.js");
  return {
    props: {
      item: "hello world",
    },
  };
};

export default Page