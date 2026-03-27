import type { Metadata } from "next";
import { VideoWithPoster } from "@/components/video-with-poster";

export const metadata: Metadata = {
  title: "Creative Supply Chain | CreateXDM",
  description:
    "An in-depth guide to the architecture, prompting, and workflows behind generative video models."
};

export default function CreativeSupplyChainPage() {
  return (
    <main className="mx-auto w-full max-w-[1100px] px-6 py-12 md:px-12">
      <article className="panel-gradient rounded-[2rem] border border-white/15 p-8 md:p-12">
        <header className="border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#b8b2a7]">Creative Supply Chain</p>
          <h1 className="mt-5 font-serif text-3xl leading-tight text-[#f6f4ef] md:text-5xl">
            An In-Depth Guide to the Architecture, Prompting, and Workflows Behind Generative Video Model
          </h1>
        </header>

        <section className="prose prose-sm prose-invert mt-8 max-w-none md:prose-base prose-headings:font-serif prose-p:text-[#d2cbbd] prose-li:text-[#d2cbbd]">
          <p>
            The jump from still-image generation to believable moving video has been one of the hardest problems in
            generative AI. A strong image can suggest a world, but video has to sustain that illusion across time.
            Motion must feel intentional. Light must remain coherent. Objects must behave consistently from frame to
            frame. With models like Google Veo, that challenge is beginning to look less like an unsolved research
            problem and more like a new creative medium.
          </p>
          <div className="my-8 overflow-hidden rounded-2xl border border-white/15 bg-black/40">
            <VideoWithPoster className="h-full w-full object-cover" src="/videos/vid1.a.mp4" controls preload="metadata" playsInline>
              Your browser does not support the video tag.
            </VideoWithPoster>
          </div>
          <p>
            This is not simply a tool for making clips from text. It represents a shift toward procedural filmmaking,
            where direction, cinematography, timing, and scene construction can all be steered through language and
            references. For creative technologists, filmmakers, developers, and researchers, it is worth understanding
            not only what Veo can do, but why it works the way it does. The more clearly we understand the system, the
            more effectively we can direct it.
          </p>
          <p className="mb-8">
            This article takes a technical look at Google Veo. We will unpack the architecture behind the model,
            explore practical prompting strategies, and then move into more advanced workflows for solving one of the
            central challenges in AI video: consistency. Along the way, we will examine how to keep characters stable
            across shots, how to preserve scene logic, and how hybrid workflows that combine generation with editing
            are shaping the future of AI filmmaking.
          </p>

          <h2>
            <strong>Deconstructing Veo — The Architecture of Motion</strong>
          </h2>
          <p>
            At a high level, Veo is a generative video model capable of producing high-definition video from text
            prompts, image references, or both. Its ability to create longer, more coherent clips with a growing grasp
            of motion, lighting, and physical interaction depends on a powerful underlying structure: a latent
            diffusion transformer.
          </p>
          <p>
            That phrase contains three important ideas. To understand how Veo works, it helps to examine each one in
            turn.
          </p>

          <h3>The Latent Space: Making Video Generation Computable</h3>
          <p>
            Raw video is expensive. Each clip contains a huge amount of visual information: resolution, texture, depth
            cues, motion, lighting shifts, and changes over time. Generating directly at the pixel level would be
            prohibitively heavy.
          </p>
          <p>
            To solve this, Veo works in latent space. Before generation happens, video is compressed by an autoencoder
            into a lower-dimensional representation that preserves the essential structure of the scene without
            retaining every raw pixel. Instead of working directly with a full-resolution shot of a bustling train
            station, the model works with a dense internal blueprint of that train station: enough to preserve form,
            movement, and semantic meaning, but small enough to manipulate efficiently.
          </p>
          <p>
            This compression is critical. It allows the model to spend its computational power on high-level visual
            reasoning rather than brute-force pixel prediction. In practice, this is one of the main reasons modern
            video generation is even feasible at usable quality.
          </p>

          <h3>
            <strong>The Diffusion Process: From Noise to Video</strong>
          </h3>
          <p>
            The generative mechanism inside Veo is diffusion. This works through two complementary stages.
          </p>
          <p>
            <strong>Forward process during training:</strong> the model gradually adds noise to clean latent video
            representations until the original structure is obscured. By learning how video degrades step by step, the
            model develops an understanding of the statistical patterns that define visual sequences.
          </p>
          <p>
            <strong>Reverse process during inference:</strong> generation runs in the opposite direction. Starting from
            noise, the model incrementally removes randomness while being guided by the prompt and any visual
            conditioning. With each denoising step, the clip becomes more structured, more legible, and more aligned
            with the requested scene.
          </p>
          <p>
            You can think of it as controlled emergence. A prompt such as “A chef plating a glowing futuristic dessert
            in a steel kitchen, cinematic close-up, slow push-in, cool white overhead lighting” is turned into a
            conditioning signal, and the system gradually shapes random noise into a moving scene that fits those
            constraints.
          </p>
          <p>Once the latent video is sufficiently clean, it is decoded back into viewable frames.</p>
          <div className="my-8 overflow-hidden rounded-2xl border border-white/15 bg-black/40">
            <VideoWithPoster className="h-full w-full object-cover" src="/videos/vid1.mp4" controls preload="metadata" playsInline>
              Your browser does not support the video tag.
            </VideoWithPoster>
          </div>

          <h3>
            <strong>The Transformer: Understanding Time, Structure, and Continuity</strong>
          </h3>
          <p>
            The denoising process is governed by a transformer, the same broad family of architecture that
            revolutionized language models. In video, transformers are particularly useful because they can model
            long-range relationships across both space and time.
          </p>
          <p>
            A frame in isolation is not enough. A hand reaching for a glass must remain attached to the same arm. The
            glass must stay in the same location relative to the table. Light should not randomly change direction
            halfway through the motion. Transformers help preserve these dependencies by attending to many parts of the
            sequence simultaneously.
          </p>
          <p>
            To make this possible, the model tokenizes the compressed spatio-temporal representation of the video so it
            can be processed as a sequence. This gives Veo a better shot at maintaining temporal coherence: consistent
            motion, believable environmental reactions, and more stable evolution across frames.
          </p>
          <p>
            This is one reason the model can respond to cinematic instructions like “slow dolly forward,” “overhead
            drone reveal,” or “time-lapse clouds moving above a frozen valley.” It is not just predicting images. It
            is modeling how scenes unfold.
          </p>

          <h2>The Art of Direction — Foundational Prompting</h2>
          <p>
            If Veo is the production engine, the prompt is your combination of brief, shot list, and directorial
            instruction. Good prompting is less about describing an image and more about specifying a shot.
          </p>
          <p>
            The strongest prompts tend to contain four core ingredients: subject, action, environment, and style.
          </p>

          <h3>
            <strong>The Essential Elements</strong>
          </h3>
          <h4>1. Subject</h4>
          <p>Who or what is at the centre of the shot?</p>
          <p>
            <strong>Weak:</strong> A woman in a room.
            <br />
            <strong>Stronger:</strong> A young ceramic artist with cropped black hair and a linen apron, her hands
            dusted with white clay.
          </p>
          <p>The more specific the subject, the less ambiguity the model has to resolve.</p>

          <h4>2. Action</h4>
          <p>What is happening in the shot?</p>
          <p>
            <strong>Weak:</strong> She is making something.
            <br />
            <strong>Stronger:</strong> She slowly lifts a freshly shaped bowl from a spinning pottery wheel.
          </p>
          <p>
            Try to keep the action focused on one beat. Models tend to perform better when they are asked to generate
            a single clear event rather than a whole chain of events.
          </p>

          <h4>3. Environment</h4>
          <p>Where is the action taking place?</p>
          <p>
            <strong>Example:</strong> Inside a sunlit pottery studio with wooden shelves, drying ceramics, and soft
            morning light coming through tall industrial windows.
          </p>
          <p>This grounds the subject in a believable context.</p>

          <h4>4. Style</h4>
          <p>
            <strong>How should the shot feel visually?</strong>
          </p>
          <p>
            Style can range from cinematic 16mm documentary footage to a high-end fashion campaign aesthetic, a soft
            pastel stop-motion look, hyperreal premium commercial lighting, or even surveillance-camera realism with
            slight digital noise, and this layer is often what separates a usable output from a generic one.
          </p>

          <h3>Adding Cinematic Control</h3>
          <p>
            Once the basics are in place, the next layer is cinematic language: you might direct camera motion with a
            slow dolly-in, a tracking shot, handheld camera wobble, a locked-off tripod shot, a crane up, or an
            orbiting camera move, then shape framing through wide shots, medium shots, close-ups, extreme close-ups,
            over-the-shoulder compositions, and point-of-view perspectives; camera angle further influences tone,
            whether you choose a low angle, high angle, eye-level view, top-down view, or dutch angle, while lighting
            and mood complete the scene with choices like soft window light on an overcast day, harsh fluorescent
            supermarket lighting, warm late-afternoon golden light, cold moonlight with deep shadows, or flickering
            neon reflections on polished concrete.
          </p>

          <h3>Prompt Example Breakdown</h3>
          <p>
            <strong>Weak Prompt:</strong> A musician performing on stage.
          </p>
          <div className="my-8 overflow-hidden rounded-2xl border border-white/15 bg-black/40">
            <VideoWithPoster className="h-full w-full object-cover" src="/videos/vid2.mp4" controls preload="metadata" playsInline>
              Your browser does not support the video tag.
            </VideoWithPoster>
          </div>
          <p>
            <strong>Stronger Directorial Prompt:</strong> Cinematic medium-wide shot of a jazz pianist in a white
            dinner jacket performing alone on a dimly lit stage. A single spotlight isolates him against the darkness
            while cigarette smoke drifts through the beam of light. The camera slowly pushes in from the audience
            perspective. Moody 1950s club atmosphere, rich contrast, shallow depth of field.
          </p>
          <div className="my-8 overflow-hidden rounded-2xl border border-white/15 bg-black/40">
            <VideoWithPoster className="h-full w-full object-cover" src="/videos/vid3.mp4" controls preload="metadata" playsInline>
              Your browser does not support the video tag.
            </VideoWithPoster>
          </div>

          <h2>
            <strong>Advanced Techniques for Cinematic Consistency</strong>
          </h2>
          <p>
            One of the biggest weaknesses in generative video is inconsistency. A character’s face changes between
            shots. A room shifts layout. An object disappears. For narrative or branded work, this breaks the illusion
            immediately.
          </p>
          <p>The solution is not one magic prompt. It is workflow discipline.</p>

          <h3>Character Consistency: Reducing Identity Drift</h3>
          <p>
            Most models do not truly remember a character from one generation to the next. Unless you explicitly anchor
            identity, the model reinterprets the character every time.
          </p>
          <h4>Solution 1: Build a Character Bible</h4>
          <p>
            Create a fixed descriptive block and reuse it exactly.
            <br />
            <strong>Example:</strong> CHARACTER: A marine biologist in her early 30s named Lina. She has deep-set
            brown eyes, olive skin, a narrow face, and a faint scar through her left eyebrow. Her dark hair is tied
            into a low bun. She wears a faded navy waterproof jacket over a grey thermal sweater, black cargo
            trousers, and a silver dive watch.
          </p>
          <p>
            The key is repetition. Reuse the same wording every time. Do not casually swap “navy waterproof jacket”
            for “blue raincoat” in the next prompt. Small changes can lead the model to produce a different person.
          </p>
          <div className="my-8 overflow-hidden rounded-2xl border border-white/15 bg-black/40">
            <VideoWithPoster className="h-full w-full object-cover" src="/videos/vid4.mp4" controls preload="metadata" playsInline>
              Your browser does not support the video tag.
            </VideoWithPoster>
          </div>
          <h4>Solution 2: Use Image Anchors</h4>
          <p>
            A stronger method is to first generate a high-quality still image of the character and then use that image
            as visual conditioning for video generation. This gives the model something concrete to match, rather than
            relying purely on text.
          </p>

          <h3>Scene and Narrative Consistency</h3>
          <p>Character consistency is only half the problem. The world around the character also needs rules.</p>
          <h4>Solution 1: One Beat Per Prompt</h4>
          <p>
            Do not try to generate an entire scene with multiple dramatic actions in one shot. Break the sequence into
            smaller, controllable beats.
          </p>
          <p>
            Instead of asking for “Lina walks into the lab, finds the glowing specimen, picks it up, turns in shock,
            and runs out,” break it into separate shots:
          </p>
          <ol>
            <li>Lina enters the lab.</li>
            <li>She notices the specimen.</li>
            <li>Close-up of her lifting it.</li>
            <li>Reaction shot.</li>
          </ol>

          <h4>Solution 2: Use a Style Bible</h4>
          <p>
            Just as you maintain a fixed character block, maintain a fixed visual block for the sequence.
            <br />
            <strong>Example:</strong> STYLE: Atmospheric science-fiction realism. Sterile research station interiors
            with brushed steel surfaces, cold cyan practical lighting, and soft reflections on glass panels. Cinematic
            but restrained. Slight film grain. Controlled camera movement. Serious tone.
          </p>
          <div className="my-8 overflow-hidden rounded-2xl border border-white/15 bg-black/40">
            <VideoWithPoster className="h-full w-full object-cover" src="/videos/vid5.mp4" controls preload="metadata" playsInline>
              Your browser does not support the video tag.
            </VideoWithPoster>
          </div>

          <h4>Solution 3: Maintain Lexical Consistency</h4>
          <p>
            If the location is a subterranean research lab, keep calling it that. Do not alternate between facility,
            corridor, science bunker, and lab complex unless the scene actually changes.
          </p>

          <h4>Solution 4: Use Motivated Continuity</h4>
          <p>Design your prompts so one shot leads naturally into the next.</p>
          <p>
            <strong>Shot 1 ends with:</strong> Lina freezes and looks toward a flickering containment chamber off-frame.
            <br />
            <strong>Shot 2 begins with:</strong> Over-the-shoulder medium shot of Lina facing the flickering
            containment chamber.
          </p>

          <h3>Brand Consistency</h3>
          <p>
            For commercial work, consistency is not only narrative. It is visual identity. The best way to manage this
            is to create a reusable brand visual block.
          </p>
          <p>
            <strong>Example:</strong> BRAND VISUAL SYSTEM: Clean premium technology aesthetic. Matte white and brushed
            aluminium surfaces. Controlled neutral colour palette with soft blue accents. Stable tripod framing,
            minimal camera shake, crisp studio lighting, polished reflections, and calm, intelligent tone.
          </p>

          <h2>Practical Workflow — Storyboarding a Multi-Shot Scene</h2>
          <p>
            <strong>Concept:</strong> A conservation scientist discovers bioluminescent coral in an underwater cave.
          </p>
          <p>
            <strong>Pre-Production Blocks:</strong> CHARACTER: Lina, a marine biologist in her early 30s with olive
            skin, deep-set brown eyes, a narrow face, and a faint scar through her left eyebrow. Her dark hair is tied
            into a low bun beneath a diving hood. She wears a fitted black wetsuit with subtle blue seams, a
            lightweight oxygen rig, and a silver dive watch.
          </p>
          <p>
            <strong>STYLE:</strong> Cinematic underwater realism. Deep blue water, soft floating particles, narrow
            shafts of filtered light, and a quiet sense of awe. Slow controlled camera movement. Naturalistic
            textures. High visual clarity with subtle dreamlike atmosphere.
          </p>
          <p>
            <strong>Shot 1 — Establishing the World:</strong> Wide underwater shot. Lina swims cautiously through a
            narrow cave passage, her torch beam cutting across dark rock walls. The camera follows slightly behind and
            above her.
          </p>
          <p>
            <strong>Shot 2 — The Discovery:</strong> Medium shot from the side. Lina stops suddenly as a faint
            turquoise glow begins to pulse from a coral formation embedded in the cave wall.
          </p>
          <p>
            <strong>Shot 3 — The Reveal:</strong> Close-up of Lina’s gloved hand reaching toward the glowing coral
            without touching it. The coral emits delicate strands of blue-green bioluminescence that illuminate her
            fingers.
          </p>

          <h2>The Hybrid Workflow — Generation Meets Editing</h2>
          <p>
            Pure generation is powerful, but professional results increasingly come from combining generation with
            editing. The strongest workflow is often hybrid.
          </p>
          <ol>
            <li>
              <strong>Generate the Core Clip:</strong> focus first on composition, motion, mood, and broad visual logic.
            </li>
            <li>
              <strong>Identify Imperfections:</strong> look for drift, flicker, warped anatomy, off-brand details, or
              inconsistent props.
            </li>
            <li>
              <strong>Use Masking for Local Fixes:</strong> isolate problem regions such as hands, faces, logos, props,
              signage, and background distractions.
            </li>
            <li>
              <strong>In-paint or Regenerate Targeted Areas:</strong> correct malformed details, stabilise product
              appearance, and reinforce brand-specific elements.
            </li>
            <li>
              <strong>Extend or Reframe with Out-painting:</strong> adapt shots for different formats while preserving
              visual balance.
            </li>
          </ol>

          <h2>The Future is Direction</h2>
          <p>
            What tools like Veo are really changing is not only production speed, but the shape of creative labour. The
            core challenge is no longer whether pixels can be generated. It is whether a creator can specify, guide,
            refine, and maintain coherence across a visual system.
          </p>
          <p>
            That requires more than prompt tricks. It requires a directorial mindset. The age of the AI director is
            not defined by typing a sentence and getting a miracle. It is defined by learning how to build consistency,
            visual logic, and intention into a machine that can now move.
          </p>
        </section>
      </article>
    </main>
  );
}
