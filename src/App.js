import './index.css'
import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

import ChatBot from './views/ChatBot'

import { supabase } from './api/supabaseClient'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <div className="supabase-auth">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google']} />
      </div>
    )
  }
  else {
    return (
      <ChatBot />
    )
  }
}
