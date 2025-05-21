const flashcards = [
  { front: 'What is the supreme law of the land?', back: 'the Constitution' },
  { front: 'What does the Constitution do?', back: 'Sets up the government, Defines the government, Protects basic rights of Americans' },
  { front: 'The idea of self-government is in the first three words of the Constitution. What are these words?', back: 'We the People' },
  { front: 'What is an amendment?', back: 'A change to the Constitution' },
  { front: 'What do we call the first ten amendments to the Constitution?', back: 'The Bill of Rights' },
  { front: 'What is one right or freedom from the First Amendment?', back: 'Freedom of Speech' },
  { front: 'How many amendments does the Constitution have?', back: '27' },
  { front: 'What did the Declaration of Independence do?', back: 'Declared our independance from Great Brtiain' },
  { front: 'What are two rights in the Declaration of Independence?', back: 'Life, Liberty and the persuit of happiness' },
  { front: 'What is freedom of religion?', back: 'You can practice any religion, or not practice a religion.' },
  { front: 'What is the economic system in the United States?', back: 'Capitalist economy' },
  { front: 'What is the rule of law?', back: 'Everyone must follow the law.' },
  { front: 'Name one branch or part of the government.', back: 'Congress' },
  { front: 'What stops one branch of government from becoming too powerful?', back: 'Checks and Balances' },
  { front: 'Who is in charge of the executive branch?', back: 'the President' },
  { front: 'Who makes federal laws?', back: 'Congress, Senate and House, US Legislature' },
  { front: 'What are the two parts of the U.S. Congress?', back: 'the Senate and the House' },
  { front: 'How many U.S. Senators are there?', back: '100' },
  { front: 'We elect a U.S. Senator for how many years?', back: '6' },
  { front: 'Who is one of your states U.S. Senators now?', back: 'Ted Cruz' },
  { front: 'The House of Representatives has how many voting members?', back: '435' },
  { front: 'We elect a U.S. Representative for how many years?', back: '2' },
  { front: 'Name your U.S. Representative.', back: 'Lance Gooden' },
  { front: 'Who does a U.S. Senator represent?', back: 'All the people of the state' },
  { front: 'Why do some states have more Representatives than other states?', back: 'Becasue of the states population' },
  { front: 'We elect a President for how many years?', back: '4' },
  { front: 'In what month do we vote for President?', back: 'November' },
  { front: 'What is the name of the President of the United States now?', back: 'Joe Biden' },
  { front: 'What is the name of the Vice President of the United States now?', back: 'Kamala Harris' },
  { front: 'If the President can no longer serve, who becomes President?', back: 'The Vice President' },
  { front: 'If both the President and the Vice President can no longer serve, who becomes President?', back: 'The Speaker of the House' },
  { front: 'Who is the Commander in Chief of the military?', back: 'The President' },
  { front: 'Who signs bills to become laws?', back: 'The President' },
  { front: 'Who vetoes bills?', back: 'The President' },
  { front: 'What does the Presidents Cabinet do?', back: 'Advises the President' },
  { front: 'What are two Cabinet-level positions?', back: 'Secretary of Education, Secretary of Defense' },
  { front: 'What does the judicial branch do?', back: 'Reviews laws, explains laws, resolves disputes, decides if a law is Unconstitutional' },
  { front: 'What is the highest court in the United States?', back: 'The Supreme Court' },
  { front: 'How many justices are on the Supreme Court?', back: '9' },
  { front: 'Who is the Chief Justice of the United States now?', back: 'John Roberts' },
  { front: 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?', back: 'To print money' },
  { front: 'Under our Constitution, some powers belong to the states. What is one power of the states?', back: 'Give a drivers license' },
  { front: 'Who is the Governor of your state now?', back: 'Greg Abbott' },
  { front: 'What is the capital of your state?', back: 'Austin' },
  { front: 'What are the two major political parties in the United States?', back: 'Democratic and Republican' },
  { front: 'What is the political party of the President now?', back: 'Democrat' },
  { front: 'What is the name of the Speaker of the House of Representatives now?', back: 'Kevin McCarthy' },
  { front: 'There are four amendments to the Constitution about who can vote. Describe one of them.', back: 'Citizens eighteen and older.' },
  { front: 'What is one responsibility that is only for United States citizens?', back: 'Vote in a feederal election' },
  { front: 'Name one right only for United States citizens.', back: 'Vote in a feredal election' },
  { front: 'What are two rights of everyone living in the United States?', back: 'freedom of religion, freedom of speech' },
  { front: 'What do we show loyalty to when we say the Pledge of Allegiance?', back: 'the United States and the flag' },
  { front: 'What is one promise you make when you become a United States citizen?', back: 'Give up loyalty to other countries' },
  { front: 'How old do citizens have to be to vote for President?', back: '18 and older' },
  { front: 'What are two ways that Americans can participate in their democracy?', back: 'Vote and run for office' },
  { front: 'When is the last day you can send in federal income tax forms?', back: 'April 15' },
  { front: 'When must all men register for the Selective Service?', back: 'At age 18' },
  { front: 'What is one reason colonists came to America?', back: 'Escape persecution' },
  { front: 'Who lived in America before the Europeans arrived?', back: 'Native Americans' },
  { front: 'What group of people was taken to America and sold as slaves?', back: 'Africans' },
  { front: 'Why did the colonists fight the British?', back: 'Because of high taxes' },
  { front: 'Who wrote the Declaration of Independence?', back: 'Thomas Jefferson' },
  { front: 'When was the Declaration of Independence adopted?', back: 'July 4, 1776' },
  { front: 'There were 13 original states. Name three.', back: 'New Hampshire, New Jersey, New York' },
  { front: 'What happened at the Constitutional Convention?', back: 'The Constitution was written' },
  { front: 'When was the Constitution written?', back: '1787' },
  { front: 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.', back: 'Alexander Hamilton' },
  { front: 'What is one thing Benjamin Franklin is famous for?', back: 'Started the first free libraries' },
  { front: 'Who is the Father of Our Country?', back: 'George Washington' },
  { front: 'Who was the first President?', back: 'George Washington' },
  { front: 'What territory did the United States buy from France in 1803?', back: 'Louisiana' },
  { front: 'Name one war fought by the United States in the 1800s.', back: 'War of 1812' },
  { front: 'Name the U.S. war between the North and the South.', back: 'the Civil War' },
  { front: 'Name one problem that led to the Civil War.', back: 'Slavery' },
  { front: 'What was one important thing that Abraham Lincoln did?', back: 'Freed the slaves' },
  { front: 'What did the Emancipation Proclamation do?', back: 'Freed the slaves' },
  { front: 'What did Susan B. Anthony do?', back: 'Fought for womens rights, fought for civil rights' },
  { front: 'Name one war fought by the United States in the 1900s', back: 'Vietnam War' },
  { front: 'Who was President during World War I?', back: 'Woodrow Wilson' },
  { front: 'Who was President during the Great Depression and World War II?', back: 'Franklin Roosevelt' },
  { front: 'Who did the United States fight in World War II?', back: 'Japan, German, Italy' },
  { front: 'Before he was President, Eisenhower was a general. What war was he in?', back: 'World War 2' },
  { front: 'During the Cold War, what was the main concern of the United States?', back: 'Communism' },
  { front: 'What movement tried to end racial discrimination?', back: 'Civil Rights Movement' },
  { front: 'What did Martin Luther King, Jr. do?', back: 'Fought for civil rights, worked for equality for all Americans' },
  { front: 'What major event happened on September 11, 2001, in the United States?', back: 'Terrorists attacked the United States' },
  { front: 'Name one American Indian tribe in the United States.', back: 'Cherokee' },
  { front: 'Name one of the two longest rivers in the United States.', back: 'Mississippi River' },
  { front: 'What ocean is on the West Coast of the United States?', back: 'Pacific Ocean' },
  { front: 'What ocean is on the East Coast of the United States?', back: 'Atlantic Ocean' },
  { front: 'Name one U.S. territory.', back: 'Puerto Rico' },
  { front: 'Name one state that borders Canada.', back: 'Alaska' },
  { front: 'Name one state that borders Mexico.', back: 'Texas' },
  { front: 'What is the capital of the United States?', back: 'Washington DC' },
  { front: 'Where is the Statue of Liberty?', back: 'Liberty Island' },
  { front: 'Why does the flag have 13 stripes?', back: 'Because there were 13 original colonies' },
  { front: 'Why does the flag have 50 stars?', back: 'Because there is one star for each state' },
  { front: 'What is the name of the national anthem?', back: 'The Star Spangled Banner' },
  { front: 'When do we celebrate Independence Day?', back: 'July 4' },
  { front: 'Name two national U.S. holidays.', back: 'Thanksgiving, Christmas' },

  // Add more flashcards as needed
];

let currentCardIndex = 0;
const flashcardContainer = document.getElementById('flashcard-container');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const prevBtn = document.getElementById('prev-btn');
const flipBtn = document.getElementById('flip-btn');
const nextBtn = document.getElementById('next-btn');

function updateCard() {
  front.textContent = flashcards[currentCardIndex].front;
  back.textContent = flashcards[currentCardIndex].back;
}

function showFront() {
  front.style.display = 'block';
  back.style.display = 'none';
}

function showBack() {
  front.style.display = 'none';
  back.style.display = 'block';
}

prevBtn.addEventListener('click', () => {
  currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
  updateCard();
  showFront();
});

nextBtn.addEventListener('click', () => {
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  updateCard();
  showFront();
});

flipBtn.addEventListener('click', () => {
  if (back.style.display == 'block'){ //if showing front
    showFront();
  } else{
    showBack();
  }
});

updateCard();
showFront();
