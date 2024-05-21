

export default function DownloadBtn() {
  return (
    <div className="flex justify-center h-full items-end mb-14 gap-3">
        <a href="https://apps.apple.com/il/app/picky-park/id6476976854" target="_blank">
            <img src="..\Images\AppStoreBtn.png" alt="App store button" width={120} />
        </a>

        <a>
            <img src="..\Images\GooglePlayBtn.png" alt="Google play button" width={120}/>
        </a>
    </div>
  )
}
