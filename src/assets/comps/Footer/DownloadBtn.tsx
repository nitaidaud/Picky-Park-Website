import appstoreBtn from '/Images/AppStoreBtn.png'
import googleplayBtn from '/Images/GooglePlayBtn.png'

export default function DownloadBtn() {
  return (
    <div className="flex w-full justify-center lg:justify-start h-full items-end gap-3 mb-15 lg:mb-0">
        <a href="https://apps.apple.com/il/app/picky-park/id6476976854" target="_blank">
        <img
          src={appstoreBtn}
          alt="App store button" width={120} />
        </a>

        <a href="https://apps.apple.com/il/app/picky-park/id6476976854" target="_blank">
        <img
          src={googleplayBtn}
          alt="Google play button" width={120} />
        </a>
    </div>
  )
}
