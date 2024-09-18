import appstoreBtn from '../../../../public/Images/AppStoreBtn.png'
import googleplayBtn from '../../../../public/Images/GooglePlayBtn.png'

export default function DownloadBtn() {
  return (
    <div className="flex w-full justify-center lg:justify-start h-full items-end gap-3 mb-15 lg:mb-0">
        <a href="https://apps.apple.com/il/app/picky-park/id6476976854" target="_blank">
        <img
          // src="..\Images\AppStoreBtn.png"
          src={appstoreBtn}
          alt="App store button" width={120} />
        </a>

        <a href="https://apps.apple.com/il/app/picky-park/id6476976854" target="_blank">
        <img
          // src="..\Images\GooglePlayBtn.png"
          src={googleplayBtn}
          alt="Google play button" width={120} />
        </a>
    </div>
  )
}
