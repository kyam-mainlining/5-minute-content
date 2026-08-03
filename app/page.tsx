import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "5 Minute Content | The Simplest Way To Post High Impact Content On LinkedIn",
  description:
    "A simple, research-backed system for daily publishing without spending hours creating content, mastering complicated AI workflows, or filling your profile up with generic LinkedIn slop.",
};

const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#offer";

function Cta({ children }: { children: React.ReactNode }) {
  const isExternal = checkoutUrl.startsWith("http");

  return (
    <a
      className="cta"
      href={checkoutUrl}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero__copy">
          <p className="kicker">FOR FOUNDERS, CONSULTANTS, WRITERS, AND SERVICE PROVIDERS WHO KNOW LINKEDIN COULD HELP THEIR BUSINESS:</p>
          <h1>The Simplest Way To Post High Impact Content On LinkedIn</h1>
          <p className="hero__qualifier">(without being an AI savant or having any previous “content marketing” experience)</p>
          <p className="hero__subhead">A simple, research-backed system for daily publishing without spending hours creating content, mastering complicated AI workflows, or filling your profile up with generic LinkedIn slop.</p>
          <p className="hero__proof">Built from more than 10,000 published posts and an analysis of 2,989 posts across 16.4 million impressions.</p>
          <Cta>BUY 5 MINUTE CONTENT</Cta>
          <p className="warning">⚠️WARNING: Reading this page will take longer than consuming the actual product.</p>
        </div>
        <div className="hero__image">
          <Image
            src="/five-minute-content-book.png"
            alt="5 Minute Content, a simple writing system"
            width={1122}
            height={1403}
            sizes="(max-width: 860px) 100vw, 43vw"
            priority
          />
        </div>
      </section>

      <section className="letter-section">
        <div className="sales-copy">
          <p>Dear Reader,</p>

          <p>Have you ever tried to sit down and create content for LinkedIn…only to waste your valuable work time struggling to publish one solid post?</p>

          <p>Maybe you know you should be on LinkedIn, but you have no idea how to start or stay consistent. Maybe you can’t seem to find 20 free hours in your weekly schedule to create posts, test angles, send comments, “network”, “provide value” or do any of the other social media “audience building” activities.</p>

          <p>Or maybe you’ve already been posting for years and dumping tons of time and energy into content creation…but you still don’t have much to show for it.</p>

          <p>If any of that sounds remotely familiar, I built <strong>5 Minute Content</strong> just for you.</p>

          <p>It is a short, practical writing system that helps you create and publish one high quality LinkedIn post in precisely 5 minutes or less.</p>

          <p>My name is Kyam Calvert.</p>

          <p>And since 2022, my team and I have published more than 10,000 LinkedIn posts for founders and businesses across more than 25 industries.</p>

          <p>Companies have paid us thousands (and sometimes tens of thousands) of dollars to create their content, advise their teams, and help them build reach and authority on LinkedIn.</p>

          <p>During our work, we analyzed 2,989 client posts across 16.4 million impressions to identify which parts of the content process consistently mattered most.</p>

          <p>Then, I compressed what we learned into the smallest, simplest system I could make.</p>
        </div>
      </section>

      <section className="product-intro dark-section">
        <div className="product-intro__copy">
          <p className="intro-line">Introducing…</p>
          <h2>5 Minute Content</h2>
          <h3>A Step-By-Step System For Turning Your Existing Knowledge, Stories, And Opinions Into High-Impact LinkedIn Posts in 5 Minutes Or Less</h3>

          <p>Let’s me be extremely clear:</p>

          <p>This is not a 20-hour LinkedIn course.</p>

          <p>It is not a database of 500 prompts.</p>

          <p>It is not an elaborate “personal brand operating system” that requires three apps, a Notion dashboard, and an entire weekend of setup.</p>

          <p>And it’s not even close to “my entire LinkedIn system” or whatever the other ghostwriters and gurus are shilling.</p>

          <p>It is a simple process you can absorb and understand in roughly ten minutes and implement in five.</p>

          <p>You’ll learn how to:</p>

          <ul>
            <li>Create a high-impact LinkedIn post every day, without missing days, and stay in front of your audience (requires zero creativity or previous experience)</li>
            <li>Compress your entire content process into less time than it takes to drink your first cup of coffee</li>
            <li>Find useful post ideas inside your normal work, conversations, experiences, and opinions.</li>
            <li>Understand why some posts should attract a broad audience while others should speak directly to potential buyers.</li>
            <li>Write clear, contextual hooks without memorizing dozens of formulas.</li>
            <li>Turn one useful thought into a complete post without staring at a blank screen.</li>
            <li>Add your experience, judgment, and point of view that makes any post worth reading.</li>
            <li>Stop spending 45 to 60 minutes polishing something that should take five.</li>
            <li>Use AI to mine transcripts, documents, notes, and recordings without allowing it to invent facts or erase your voice.</li>
            <li>Get off the sidelines and build a personal brand without reorganizing your life around creating content.</li>
          </ul>

          <p>If you’ve been struggling to stay consistent, you know you need to be building on LinkedIn, and you have the willpower to “lock in” for 5 measly minutes?</p>

          <p>This is the content system for you.</p>

          <Cta>GET 5 MINUTE CONTENT FOR $67</Cta>
        </div>
      </section>

      <section className="letter-section">
        <div className="sales-copy">
          <h2>Why “Just Stay Consistent” Is Useless Advice</h2>

          <p>Most LinkedIn advice tells you what you <em>should</em> do without making it any easier to do.</p>

          <p>“Stay consistent.”</p>

          <p>“Provide value.”</p>

          <p>“Tell stories.”</p>

          <p>“Write better hooks.”</p>

          <p>This all sounds great during your late night doomscroll, but somehow fails to help you create more content when you’re sitting at the computer in the morning.</p>

          <p>See, most courses add more frameworks to remember. More prompt libraries replace the blank page with hundreds of choices. More trends to keep up with.</p>

          <p>More, more, more!</p>

          <p>5 Minute Content takes the opposite approach.</p>

          <p>It removes unnecessary decisions and gives you <strong>one repeatable process</strong> you can use to fire off a <strong>high quality</strong> post before your coffee is cool enough to drink.</p>

          <p>Question:</p>
        </div>
      </section>

      <section className="story-section">
        <div className="sales-copy">
          <h2>How Hard Would You Judge A Fully Grown Man Who Asked His Mom To Take His LinkedIn Profile Picture?</h2>

          <p>Hold your answer, please. Let’s rewind.</p>

          <p>At 30 years old, I had no meaningful LinkedIn presence.</p>

          <p>And you know what?</p>

          <p>I didn’t want one.</p>

          <p>I’d just left my career as a welder to jump into freelance copywriting. Most people who knew me had never seen me publish business advice, and I had zero traditional white-collar career experience. Even worse, I had no impressive professional network to lean on.</p>

          <p>Moreover, my business plan at the time was Twitter ghostwriting.</p>

          <p>I would find interesting clients, write tweets for a living, charge respectable retainers, and avoid the stiff corporate atmosphere I associated with LinkedIn.</p>

          <p>I am serious when I say this: LinkedIn was the absolute <em>last</em> thing on my mind.</p>

          <p>And for a while, Twitter ghostwriting just…worked.</p>

          <p>Then Elon happened, and the platform changed.</p>

          <p>Business content became harder to distribute, my offer became more difficult to sell, and I was honestly wondering whether I had built my livelihood on unstable ground.</p>

          <p>By early 2023, I was preparing to move on from social media services altogether.</p>

          <p>Then one of my existing clients asked me to run his LinkedIn account.</p>

          <p>I initially said no.</p>

          <p>Like I said, I had no experience on the platform, and I was still frustrated by how the Twitter opportunity had ended.</p>

          <p>But the client was persistent. He made it politely clear that he would be hiring someone either way.</p>

          <p>So I took the job.</p>

          <p>Within a few days, we published a few straightforward business posts…and I was shocked by the results.</p>

          <p>Simple ideas were reaching hundreds and sometimes thousands of people.</p>

          <p>More importantly, LinkedIn was full of exactly the kinds of prospects my clients and I wanted to meet.</p>

          <p><strong>And just like that, I was excited about social media again.</strong></p>

          <p>So I did what any rational, fully grown man with a lovely wife, 3 kids, and a mortgage would do:</p>

          <p>I called my mother.</p>

          <blockquote>“Ma, can you take a picture of me in a collared shirt?”</blockquote>

          <p>30 minutes and one hilarious conversation later, I had a LinkedIn account: a painfully cringe profile photo of me trying to look like I belonged on the world&apos;s biggest business platform... and exactly 0 followers.</p>

          <p>I started sending connection requests - friends’ parents, random strangers. I needed to get in on this LinkedIn traffic, and fast.</p>

          <p>My first posts got around 20 views each.</p>

          <p>I could tell it was going to be a grind, but I kept my head down and posted daily for months on end.</p>

          <p>Then one morning, a hundred followers in, I clicked “send” on my daily post…</p>

          <p>And got 20 likes and 800 views.</p>

          <div className="reaction-image">
            <Image
              src="/founder-reaction.png"
              alt="LET’S FUCKING GOOOOOOOOOO"
              width={666}
              height={666}
              sizes="(max-width: 700px) 72vw, 360px"
            />
          </div>

          <p>It may as well have been a million.</p>

          <p>Within 48 hours of that post, I&apos;d pitched every client I&apos;d ever worked with on a LinkedIn service.</p>

          <p>And several of those dear humans said yes, and thus launched my LinkedIn content agency.</p>
        </div>
      </section>

      <section className="letter-section bordered-section">
        <div className="sales-copy">
          <h2>We Have Published A Completely Unreasonable Amount of LinkedIn Content</h2>

          <p>The service grew, clients gained traction, and the offer became easier to sell.</p>

          <p>Then the market caught up.</p>

          <p>Suddenly, LinkedIn ghostwriters were everywhere. Many had larger audiences, better-known personal brands, and much larger networks.</p>

          <p>So we competed the only way we could:</p>

          <p>We increased our post output.</p>

          <p>Despite guru advice telling me to post “3-5x” weekly, all our client accounts improved right away.</p>

          <p>Our case studies got stronger. We raised our prices.</p>

          <p>More importantly, my lead writer Chris and I accumulated an enormous amount of practical experience.</p>

          <p>Eventually, writing posts stopped feeling like a major creative undertaking.</p>

          <p>We could hear a client say something during a call and immediately recognize the potential post. We could tell whether an idea needed a wider frame or should speak directly to a narrow buyer. We could see where the opening should begin, what belonged in the body, and which conclusion was actually worth keeping.</p>

          <p>We later taught my dad, who had never spent a single calorie thinking about LinkedIn in his life, to write effective posts using the same underlying principles!</p>

          <p>(He currently works as a writer inside our agency!)</p>

          <p>By 2025, we had published more than 10,000 posts.</p>

          <p>Our clients included businesses in pharmaceutical compounding, enterprise software, ecommerce, recruiting, sales, media, and agency services.</p>

          <p>Companies were paying us thousands, and sometimes tens of thousands, of dollars to create their content and advise their teams.</p>

          <p>The more experience we accumulated, the faster we could create great content, no matter the niche.</p>

          <p>That experience is the entire basis for 5 Minute Content.</p>
        </div>
      </section>

      <section className="what-you-get" id="included">
        <div className="sales-copy">
          <h2>Here Is Everything You Get</h2>

          <article className="product-item">
            <h3>1. 5 Minute Content</h3>

            <p>The core written system shows you how to turn any idea into a complete LinkedIn post, fast.</p>

            <p>It covers:</p>

            <ul>
              <li>How and why to choose the “goal” of every post</li>
              <li>Where to find useful raw material for content with near-zero effort or creativity</li>
              <li>How to write hooks that outperform almost every guru framework ever created</li>
              <li>A simple way to write body copy without overthinking it</li>
              <li>How and where to add your unique spin to any post in less than 30 seconds</li>
              <li>The best way to perform a fast editing pass before publishing</li>
            </ul>

            <p>This is a “one pager”, not a “full guide”. That is a feature, not a bug.</p>

            <p>5 Minute Content is everything you need and nothing you don’t, period.</p>

            <p>There is no curriculum to complete before you can use it. You can read it in one sitting and create your first post immediately afterward.</p>
          </article>

          <article className="product-item">
            <h3>2. The AI Shortcut</h3>

            <p>When you have a transcript, document, voice memo, article draft, research file, call notes, or collection of rough ideas, upload it to your favorite LLM and include our “AI Shortcut” prompt.</p>

            <p>The AI will return:</p>

            <ul>
              <li>One post designed to get Reach and grow your account</li>
              <li>One post designed to build and display topical authority</li>
              <li>A count and inventory of the other useful post ideas inside the source.</li>
            </ul>

            <p>Again, everything you need - nothing you don’t.</p>

            <p>The prompt instructs the model to treat your source as the only basis for factual claims. It cannot invent a client story, fake a result, manufacture a quote, or pretend weak material supports a post when it does not.</p>

            <p>It is designed to speed up idea extraction without fumbling around inside ChatGPT or Claude for half the afternoon while your work sits undone.</p>
          </article>

          <article className="product-item bonus-item">
            <h3>BONUS 1: The Expanded AI Guardrail</h3>

            <p>Let’s face it, “AI Slop” will probably be in the dictionary this year.</p>

            <p>The Expanded AI Guardrail helps you avoid what we consider to be the main “tells” of AI Slop:</p>

            <ul>
              <li>Repeated contrast constructions (it’s not x, it’s y - and don’t I know it…)</li>
              <li>Uniform rows of fake-punchy sentences</li>
              <li>Abstract motivational endings (AI loves deviating from the topic at hand)</li>
              <li>Therapy and guru language</li>
              <li>Strawman openers that weaken your hook</li>
              <li>Empty “intensifiers” that actually do the opposite</li>
              <li>Question hooks and engagement-bait closes (these simply don’t perform well)</li>
              <li>Common phrases that immediately make a post feel machine-generated</li>
            </ul>

            <p>Paste it alongside your prompt or use it as a manual editing checklist.</p>

            <p>You can also expand it with your own dislikes over time and create a more personalized filter for your voice. This isn’t the end-all, be-all of cleaning up AI outputs but it’s a great start and we use it every time an LLM helps out with a post.</p>
          </article>

          <article className="product-item bonus-item">
            <h3>BONUS 2: The Live LinkedIn Content Supercut</h3>

            <h4>Watch Me Write Posts From Scratch For 45 Minutes</h4>

            <p>This is not a polished highlight reel built around one conveniently perfect idea.</p>

            <p>You will watch me take ordinary thoughts, opinions, observations, and experiences and turn them into high-engagement style posts in real time.</p>

            <p>You will see how I select ideas, find the broader point, develop the hook, choose what belongs in the post, and remove what does not.</p>

            <p>I should be charging $500 for just this video, because the select few who have seen it have gotten <em>at least</em> that much value out of just 1 viewing.</p>

            <p>And yes, I write the posts and then come back the next day so you can see how they did! This alone will be worth tens of thousands for the right person who watches it, takes notes, and executes on what they learn.</p>
          </article>

          <article className="product-item">
            <h3>BONUS 3: 5 Minute Content In Action</h3>

            <h4>Watch Me Use 5 Minute Content, Live</h4>

            <p>Simple: you watch me use the product myself.</p>

            <p>Creating 5 Minute Content wasn’t super simple for me - in fact, it was one of my harder and more distracting undertakings.</p>

            <p>The reason why is simple:</p>

            <p>Creating an in-depth, nuanced course about content creation would be very straightforward. We have years of experience and thousands of posts published, after all.</p>

            <p>Distilling all that into a simple, affordable, easy-to-use product for absolutely anyone?</p>

            <p>That was not so straightforward.</p>

            <p>So if the product was not usable by my team and I?</p>

            <p>I wouldn’t have released it or written this page.</p>

            <Cta>BUY 5 MINUTE CONTENT</Cta>
          </article>
        </div>
      </section>

      <section className="promise-section dark-section">
        <div className="sales-copy">
          <h2>5 Minute Content gives you a repeatable process for creating better content, more often than your competition.</h2>

          <p>Look, I’m not saying 5 minutes of work will make you famous or fill your calendar tomorrow.</p>

          <p>But if you don’t have 67 bucks and 15 minutes to read this twice and execute it once, I don’t know what to tell you! It’s an insane steal, if you ask me.</p>
        </div>
      </section>

      <section className="letter-section">
        <div className="sales-copy">
          <h2>Is 5 Minute Content Right For You?</h2>

          <p>This system is designed for people who know they should post content, but struggle with the actual process.</p>

          <p>That includes founders, consultants, freelancers, agency owners, writers, service providers, fractional executives, operators, and professionals building a reputation in their field.</p>

          <p>It is also useful if you run outbound marketing, receive referrals, or send paid traffic to an offer. Prospects frequently inspect your LinkedIn profile before replying or buying, and an active profile filled with useful ideas can reinforce trust before the sales conversation begins.</p>

          <p>You don’t need a large following or previous content marketing experience for this to be useful.</p>

          <p>This is <strong>not</strong> for anyone seeking a guaranteed viral formula, a completely automated personal brand, or an exhaustive course covering every possible LinkedIn tactic.</p>

          <p>It is for people who want a straightforward writing process they will actually use.</p>
        </div>
      </section>

      <section className="offer-section" id="offer">
        <div className="offer-section__image">
          <Image
            src="/five-minute-content-book.png"
            alt="The 5 Minute Content system"
            width={1122}
            height={1403}
            sizes="(max-width: 860px) 100vw, 45vw"
          />
        </div>
        <div className="offer-section__copy">
          <h2>Get The Complete 5 Minute Content System For $67</h2>

          <p>Your purchase includes:</p>

          <ul>
            <li>5 Minute Content.</li>
            <li>The AI Shortcut.</li>
            <li>BONUS 1: The Expanded AI Guardrail.</li>
            <li>BONUS 2: The Live LinkedIn Content Supercut.</li>
            <li>BONUS 3: 5 Minute Content In Action.</li>
          </ul>

          <p>You will receive immediate access to every written resource and both implementation videos.</p>

          <p>The current founding price is <strong>$67.</strong></p>

          <p>As more customer examples, refinements, and product-specific proof are added, the price will increase. I might even crank this one up near the $500 region.</p>

          <Cta>GET 5 MINUTE CONTENT FOR $67</Cta>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="sales-copy">
          <h2>Frequently Asked Questions</h2>

          <article>
            <h3>Do I Need To Be A Good Writer?</h3>

            <p>Nope. Apologies to my writer friends, but sometimes its better to start posting with zero creative writing experience. Writers tend to overthink, especially when writing about writing. That said, experienced writers can use the system to make high impact decisions faster. Less experienced writers can use the system to avoid staring at a blank page or fumbling around with AI and getting nonsense in return.</p>
          </article>

          <article>
            <h3>Do I Need AI?</h3>

            <p>No, though it may help you. Personally, I tend to write content much faster without AI. I sometimes use it to batch out ideas from call transcripts, but in the included videos you will see me use my NI (Natural Intelligence) to sling posts right off the top of my head! I also demonstrate using AI, but I’m personally better without it for the actual writing.</p>

            <p>The AI Shortcut is included so that if you DO want to use AI, you’ll start on much better footing than the whiz-bang “Prompt Engineers” who spend more time thinking about how to talk to AI than they do actual producing any work.</p>
          </article>

          <article>
            <h3>So, you’ll tell me what to write about?</h3>

            <p>In many ways, yes.</p>

            <p>These resources are specifically designed to uncover stories, opinions, processes, proof, mistakes, and observations you may not currently recognize as content.</p>

            <p>It is simply not as complicated as you are making it! You are paying me to uncomplicate it for you.</p>
          </article>

          <article>
            <h3>My Industry Is Boring. Will This Still Work?</h3>

            <p>An industry is only boring to people who have no reason to care about it. For example, I’m not interested in cricket nor brokering logistics lines to over-the-road truckers. But someone is. Several someones with LinkedIn accounts probably are.</p>

            <p>There are no “boring” industries. Just boring content. That, we can fix.</p>
          </article>

          <article>
            <h3>Will This Make Me Go Viral?</h3>

            <p>It may help you create a post that performs well, but this is not a virality guarantee.</p>

            <p>The system is designed to help you create posts faster. That is the goal. You will get posting. If you are not posting, chances of going viral are exactly 0%. Get posting first!</p>
          </article>

          <article>
            <h3>How Long Before I See Results?</h3>

            <p>15 minutes. Ten to read through the docs, 5 to write a post.</p>

            <p>The immediate result is a completed post.</p>

            <p>Audience growth, reputation, leads, and clients depend on your market, offer, profile, network, publishing frequency, and the quality of the ideas you share.</p>

            <p>Content is a long-term business asset. This system makes creating that asset substantially easier.</p>
          </article>

          <article>
            <h3>Do I Need To Post Every Day?</h3>

            <p>No. But you should.</p>

            <p>The system makes daily posting practical, not mandatory.</p>

            <p>Use it at whatever frequency you can sustain. 3 posts per week is 300% better than 0.</p>
          </article>

          <article>
            <h3>Can I Use This If I Sell B2C Products?</h3>

            <p>The system was designed primarily for people who sell to businesses or professionals.</p>

            <p>B2C founders and operators can still use it to build partnerships, attract talent, strengthen their professional reputation, or connect with others in their industry.</p>

            <p>If your only goal is direct consumer acquisition, another platform may be a better fit.</p>
          </article>

          <article>
            <h3>I Already Bought The LinkedIn Content Forge. Do I Need This?</h3>

            <p>If you bought that product I will send you this for free! DM or email me.</p>
          </article>
        </div>
      </section>

      <section className="closing-section dark-section">
        <div className="sales-copy">
          <h2>Still not convinced?</h2>

          <p>I&apos;m gonna give you to the count of ten, to get your ugly, yellow, no-good keister off my landing page…before I pump yer guts full o&apos; lead!</p>

          <figure className="home-alone-image">
            <Image
              src="/home-alone-quote.png"
              alt="Johnny delivering the quote from Angels with Filthy Souls in Home Alone"
              width={1116}
              height={704}
              sizes="(max-width: 860px) calc(100vw - 44px), 720px"
            />
          </figure>

          <p>In all seriousness, you have 2 options at this point:</p>

          <ol className="closing-options">
            <li>You can continue treating every LinkedIn post like a new creative project and get nowhere fast.</li>
            <li>You can click “buy” and post content any time you want, in far less time than it took you to read this entire landing page.</li>
          </ol>

          <p>Keep the change, ya filthy animal.</p>

          <Cta>BUY 5 MINUTE CONTENT</Cta>
        </div>
      </section>

      <div className="mobile-cta">
        <a href={checkoutUrl}>BUY 5 MINUTE CONTENT</a>
      </div>
    </main>
  );
}
