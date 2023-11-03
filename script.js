const chat = document.getElementById('chat');
	const nameInput = document.querySelector('#name-input');
	const inputWrapper = document.getElementById('input-wrapper');
	const submitBtn = document.getElementById('send-btn')
	const form = document.getElementById('name-form');
	

	

	const replyBot = (message) => {
	 setTimeout(() => showMessage(message, "bot"), 1000);
	};
	 
	

	const replyUser = (message) => {
	  showMessage(message, 'user');
	};
	

	

	const showMessage = (message, sender) => {
	  if (sender === 'user') {
	    chat.innerHTML += `
	      <section class="user-msg">
	        <div class="bubble user-bubble">
	          <p>${message}</p>
	        </div>
	        <img src="dap.webp" alt="User" />  
	      </section>
	    `
	  } else if (sender === 'bot') {
	    chat.innerHTML += `
	      <section class="bot-msg">
	        <img src="Brimsley.webp" alt="Bot" />
	        <div class="bubble bot-bubble">
	          <p>${message}</p>
	        </div>
	      </section>
	    `
	  };
	  chat.scrollTop = chat.scrollHeight;
	};
	

	

	const greetUser = () => {
	  showMessage("Hello, I am Chatbox Brimsley. What's your name?", 'bot');
	};
	  setTimeout(greetUser, 1500);
	

	form.addEventListener('submit', (event) => {
	  event.preventDefault();
	  
	const firstName = document.getElementById('name-input').value;
	  console.log(firstName);
	  showMessage(firstName, 'user');
	  setTimeout(() => saveUser(firstName), 1000);
	});
	

	

	const saveUser = (userName) => {
	  console.log(userName);
	  const upCaseUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
	

	

	replyBot(`Welcome ${upCaseUserName}!`);
	setTimeout(() => {
	  replyBot(`Do you fancy ordering a previous or the latest scandel?`);
	}, 1500);
	  console.log(inputWrapper);
	

	setTimeout(() => {
	  inputWrapper.innerHTML = 
	    `<button id="yesBtn">A Previous Scandal</button>
	    <button id="noBtn">I Must Decline</button>
		<button id="lsBtn">Latest Scandal</button>`;

		let lsBtn = document.getElementById('lsBtn');
	      lsBtn.addEventListener('click', () => choiceLs())
	

	  let yesBtn = document.getElementById('yesBtn');
	      yesBtn.addEventListener('click', () => choiceYes())
	

	  let noBtn = document.getElementById('noBtn');
	      noBtn.addEventListener('click', () => choiceNo())
	  }, 3500);
	};
	

	

	const choiceYes = () => {
	  replyUser('A Previous Scandal');
	  replyBot('What magazine are you interested in ordering?');
	

	  setTimeout(() => {
	    inputWrapper.innerHTML = 
	    `<button id="histMagBtn">The Seasons Daimond</button>
	    <button id="catMagBtn">A Bee in Your Bonnet</button>
	    <button id="fashMagBtn">Art Of The Swoon</button>`;
	

	    const histMagBtn = document.getElementById('histMagBtn')
	    histMagBtn.addEventListener('click', () => choiceMag('The Seasons Daimond'))
	

	    const catMagBtn = document.getElementById('catMagBtn');
	    catMagBtn.addEventListener('click', () => choiceMag('A Bee in Your Bonnet'))
	

	    const fashMagBtn = document.getElementById('fashMagBtn');
	    fashMagBtn.addEventListener('click', () => choiceMag('Art Of The Swoon'))
	  }, 1500);
	};
	

	const choiceMag = (magazine) => {
	    replyUser(magazine);
	    replyBot(`What edition of ${magazine} would you like to order?`);
	

	    inputWrapper.innerHTML = 
	      `<div id="monthPick">
	        <label for="pick-edition">Choose edition</label>
	        <input id="pickEdition" type="month" name="pick-edition" max="2022-12" value="2022-01" required/>
	        <button id="sendBtn">Submit</button>
	      </div>`
	

	    const sendBtn = document.getElementById('sendBtn');
	      sendBtn.addEventListener('click', (event) => {
	        event.preventDefault();
	        
	    const choiceEdition = document.getElementById('pickEdition').value;
	    const date = new Date(choiceEdition);
	    const formatDate = date.toLocaleDateString("default", {month: "long", year: "numeric"});
	    
	    replyUser(`${formatDate}`);
	

	    if (date.getMonth() === 0 || date.getMonth() === 3 || date.getMonth() === 6 || date.getMonth() === 9) {
	      replyBot(`So sorry, we seem to be out of stock of the ${formatDate} edition of ${magazine}. Please pick another edition`);
	      
	      } else {
	        replyBot(`Excellent choice`);
	      setTimeout(() => replyBot(`Then we will be happy to send you a copy of the ${formatDate} edition of ${magazine}`), 1500);
	

	      setTimeout(() => {
	        inputWrapper.innerHTML = 
	        `<button id="orderBtn">Place order</button>`;
	

	      const orderBtn = document.getElementById('orderBtn');
	        orderBtn.addEventListener('click', (event) => {
	          event.preventDefault();
	        alert("Thank you for your order 🚀");
	        window.location.reload();
	        });
	        }, 3500);
	     };
	  });
	};
	

    const choiceNo = () => {
        replyUser('One cannot possibly acquiesce to such a request, as it would be most unseemly, dont you agree?');
        replyBot(`In the grand tapestry of decisions, this one is but a threadbare folly!`);
      
  
          inputWrapper.innerHTML = 
          `<button id="byeBtn">Cheerio!</button>`;
      
  
          const byeBtn = document.getElementById('byeBtn');
          byeBtn.addEventListener('click', (event) => {
            event.preventDefault();
          alert("Good bye 🚀");
          window.location.reload();
        });
      };
  