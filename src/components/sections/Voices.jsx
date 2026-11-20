import LogoOne from "../../assets/chat-gpt.png";
import LogoTwo from "../../assets/claude-ai-logo.png";
import LogoThree from "../../assets/gemini.png";
import LogoFour from "../../assets/antigravity.png";

export default function Voices() {
  return (
    <section className="bg-sand px-6 pt-20 pb-20 md:px-12 py-28">
      <div className="dic">
        <h1 className="text-2xl font-bold text-ink mb-10 md:text-4xl">AI <span className="text-accent">Tools</span> Use</h1>
        <div className="grid grid-cols-2 text-2xl font-bold text-ink md:grid-cols-5 gap-5">
          <div className="card1 chatgpt flex gap-5 items-center">
            <img src={LogoOne} alt="Chat GPT" className="w-10 h-10 mb-2 md:w-16 md:h-16" />
            <h1 className="text-sm font-bold text-ink md:text-2xl">Chat GPT</h1>
          </div>
          <div className="card1 claude flex gap-5 items-center">
            <img className="w-10 h-10 mb-2 md:w-16 md:h-16" src={LogoTwo} alt="Claude AI" />
            <h1 className="text-sm font-bold text-ink md:text-2xl">Claude AI</h1>
          </div>
          <div className="card1 gemini flex gap-5 items-center">
            <img className="w-10 h-10 mb-2 md:w-16 md:h-16" src={LogoThree} alt="Google Gemini" />
            <h1 className="text-sm font-bold text-ink md:text-2xl">Google Gemini</h1>
          </div>
          <div className="card1 antigravity flex gap-5 items-center">
            <img className="w-10 h-10 mb-2 md:w-16 md:h-16" src={LogoFour} alt="Antigravity" />
            <h1 className="text-sm font-bold text-ink md:text-2xl">Antigravity</h1>
          </div>
          <div className="card1 codex flex gap-5 items-center">
            <img className="w-10 h-10 mb-2 md:w-16 md:h-16" src={LogoOne} alt="Chat GPT" />
            <h1 className="text-sm font-bold text-ink md:text-2xl">CodeX</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
