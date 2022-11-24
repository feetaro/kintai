import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout1'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/slice/counterSlice'

import axios from 'axios'

import { Button, ButtonGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Stack, useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import dayjs from 'dayjs'


import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Props = {
  item: string
}

const Page: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

console.log(process.env.NEXT_PUBLIC_FOO);

  //
  const {isOpen, onOpen, onClose} = useDisclosure()


  //
  const aaa = async (type: number) => {
    const now = dayjs();

    //const bbb = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const url = process.env.NEXT_PUBLIC_URL_CLOCKIN;
    const bbb = await axios.get(String(url),{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        memberId: 2,
        date: now.format('YYYYMMDDHHmmss'),
        type,
      }
    });

    console.log(bbb.data);
  }

  return (
    <>
      <Head>
        <title>正体不明2</title>
      </Head>
      <main>
        <div>
          <Button
            colorScheme='blue'
            onClick={() => aaa(0)}>
            出勤
          </Button>
          <Button
            colorScheme='red' 
            onClick={() => aaa(1)}>
            退勤
          </Button>
          <Button
            colorScheme='yellow' 
            onClick={onOpen}>
            open
          </Button>
        </div>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
          />
          <ModalContent>
{/*
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
*/}

            <ModalBody w={12}>
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
            </ModalBody>

            {/* <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter> */}
          </ModalContent>

        </Modal>
      </main>
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