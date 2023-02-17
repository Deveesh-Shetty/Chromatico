import { useState } from "react"
import { copyToClipboard } from "../../lib/clipboard"
import Notification from "../UIComponents/Modals/Notification"

interface Props {
  color: string
}

function Palette({ color }: Props) {
  const [notification, setNotification] = useState(false)
  function onClick() {
    const NOTIFICATION_TIMER = 3000
    copyToClipboard(color)
    setNotification(true)
    setTimeout(() => {
      setNotification(false)
    }, NOTIFICATION_TIMER)
  }

  return (
    <div className="flex flex-col lg:basis-1/5 bg-white rounded-lg">
      <div
        className="color w-full h-24 lg:h-96 cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={onClick}
      ></div>
      <div className="color-code flex justify-center border-t-2 py-2 bg-slate-50 rounded-b-lg cursor-pointer">
        {color}
      </div>
      {notification && (
        <Notification
          text={`${color} has been copied to clipboard`}
          setNotification={setNotification}
        />
      )}
    </div>
  )
}

export default Palette
