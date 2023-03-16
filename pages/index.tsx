import React from 'react';
import { Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <React.Fragment>
      <Page className="flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <Text variant="h1" style={{ fontFamily: 'Garamond' }}>ConfessGPT</Text>
          <Text className="text-orange-400">
            ConfessGPT is a chatbot that emulates the role of a priest in the Catholic tradition. It provides a safe and non-judgmental space for you to confess your thoughts and feelings, and offers guidance and support to help you align your actions with your values.
          </Text>
        </section>

        <section className="flex flex-col gap-3">
          <Text variant="h2" style={{ fontSize: '1.4rem' }}>You may begin when ready:</Text>
          <div className="lg:w-2/3">
            <Chat />
          </div>
        </section>
      </Page>
    </React.Fragment>
  )
}

export default Home
