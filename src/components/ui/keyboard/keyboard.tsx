import './keyboard.css'
import SimpleKeyboard from 'react-simple-keyboard'

export function Keyboard(props: React.ComponentProps<typeof SimpleKeyboard>) {
  return (
    <>
      <SimpleKeyboard
        {...props}
        theme="keyboard"
        layoutName="default"
        layout={{
          default: [
            'q w e r t y u i o p',
            'a s d f g h j k l',
            'z x c v b n m {bksp}'
          ]
        }}
        display={{ '{bksp}': '⌫' }}
      />
    </>
  )
}
