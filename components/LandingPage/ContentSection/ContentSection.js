import ContentSectionStyles from './ContentSectionStyles';

const ContentSection = () => (
  <ContentSectionStyles>
    <header className='logoSection'>
      <img src='/images/logo.png' alt='logo' />
      <div>
        <h1>Velrin's</h1>
        <h2>chat</h2>
      </div>
    </header>
    <section className='mainSection'>
      <h2>Take your chats to the next level</h2>
      <img src='/images/phone.svg' alt='phone' />
    </section>
  </ContentSectionStyles>
);

export default ContentSection;
