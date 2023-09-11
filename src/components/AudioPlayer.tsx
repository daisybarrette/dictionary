import '../styles/audio.css'

export default function AudioPlayer({ audioSrc }: { audioSrc: string }) {
    return (
        <figure className="audio-player">
            <audio controls src={audioSrc} />
        </figure>
    )
}
