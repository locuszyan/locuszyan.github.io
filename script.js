(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('#primary-nav');
  const chatLauncher = document.querySelector('#chat-launcher');
  const chatPanel = document.querySelector('#chat-panel');
  const chatClose = document.querySelector('#chat-close');
  const chatForm = document.querySelector('#chat-form');
  const chatInput = document.querySelector('#chat-input');
  const chatMessages = document.querySelector('#chat-messages');
  const chatSuggestions = document.querySelector('#chat-suggestions');
  const year = document.querySelector('#year');

  if (year) year.textContent = String(new Date().getFullYear());

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      primaryNav.classList.toggle('is-open', open);
    });
    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
        primaryNav.classList.remove('is-open');
      });
    });
  }

  const setChatOpen = (open) => {
    if (!chatLauncher || !chatPanel) return;
    chatLauncher.setAttribute('aria-expanded', String(open));
    chatPanel.hidden = !open;
    if (open) window.setTimeout(() => chatInput?.focus(), 50);
    else chatLauncher.focus();
  };
  chatLauncher?.addEventListener('click', () => {
    setChatOpen(chatLauncher.getAttribute('aria-expanded') !== 'true');
  });
  chatClose?.addEventListener('click', () => setChatOpen(false));

  const addMessage = (text, role) => {
    const bubble = document.createElement('p');
    bubble.className = `chat-bubble ${role === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`;
    bubble.textContent = text;
    chatMessages?.appendChild(bubble);
    if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const answerFor = (question) => {
    const text = question.toLowerCase();
    if (/\b(price|pricing|cost|budget|quote|quotation)\b/.test(text)) {
      return 'Every project is scoped around the brief, format and deliverables, so pricing is quoted individually. Send your idea and deadline on WhatsApp or by email for a tailored quote.';
    }
    if (/\b(ugc|ad|advert|product|saas|meta)\b/.test(text)) {
      return 'Yes. Locus Zyan creates AI UGC-style and product ads, including concept direction, script and prompts, generated visuals, editing, captions and sound design. Share your product and target platform to get started.';
    }
    if (/\b(film|filmmak|story|cinematic|movie|script)\b/.test(text)) {
      return 'AI filmmaking and story-led video are part of the studio’s work—from concept and script direction to cinematic scenes, editing and delivery. Send a reference or a short story idea and we can discuss the scope.';
    }
    if (/\b(cartoon|animation|anime|2d|3d|character)\b/.test(text)) {
      return 'The studio works on 2D/3D cartoon concepts, AI animation and character-consistent multi-scene stories. The exact style and scene count are agreed for each project.';
    }
    if (/\b(social|instagram|tiktok|youtube|reel|shorts|management|content)\b/.test(text)) {
      return 'Locus Zyan offers brand and social videos, short-form content, and AI-assisted social media management. Tell us which platforms you use and what kind of support you need.';
    }
    if (/\b(chatbot|chat bot|auto.?repl|automation|website|web site|site|lead)\b/.test(text)) {
      return 'The agency also builds customer-facing AI chatbot and auto-reply experiences, plus clear, responsive websites designed to make it easier for visitors to inquire.';
    }
    if (/\b(language|bengali|bangla|hindi|english)\b/.test(text)) {
      return 'The supplied portfolio lists Bengali (native), English (fluent), and Hindi for content creation.';
    }
    if (/\b(start|begin|brief|process|how|work with|contact|reach)\b/.test(text)) {
      return 'To start, share your goal, audience, platform, references, deadline and approximate scope. Message Locus Zyan on WhatsApp at +880 1352 782408 or email locuszyan@gmail.com.';
    }
    return 'I don’t have a confirmed answer to that yet. The quickest way to get a useful reply is to message Locus Zyan on WhatsApp at +880 1352 782408 or email locuszyan@gmail.com.';
  };

  const ask = (question) => {
    const clean = question.trim();
    if (!clean) return;
    addMessage(clean, 'user');
    if (chatSuggestions) chatSuggestions.hidden = true;
    addMessage(answerFor(clean), 'assistant');
  };

  chatForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!chatInput) return;
    ask(chatInput.value);
    chatInput.value = '';
    chatInput.focus();
  });

  chatSuggestions?.querySelectorAll('button[data-question]').forEach((button) => {
    button.addEventListener('click', () => ask(button.dataset.question || ''));
  });
})();
