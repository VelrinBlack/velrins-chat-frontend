import styled from 'styled-components';

const FormSectionStyles = styled.div`
  flex: 1;

  background: linear-gradient(180deg, #18586d 0%, #1b6177 0.01%, #0a3745 100%);
  clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0% 100%);

  @media (max-width: 1280px) {
    clip-path: none;
  }

  .contentContainer {
    height: 100%;
    margin-left: 15%;

    @media (max-width: 1280px) {
      margin-left: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      color: #fff;
      font-size: clamp(40px, 3vw, 90px);
      text-align: center;

      @media (max-width: 1280px) {
        margin-top: 50px;
      }
    }

    form {
      width: 90%;
      margin-top: 50px;

      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 1280px) {
        margin-top: 30px;
      }

      .container {
        width: 100%;

        display: flex;
        justify-content: space-between;

        @media (max-width: 768px) {
          flex-direction: column;
        }

        input {
          width: 49.5%;

          @media (max-width: 768px) {
            width: 100%;
          }
        }
      }

      input {
        width: 100%;
        height: clamp(40px, 3vw, 50px);
        margin-top: 20px;
        padding: 20px;

        border: 0;
        border-radius: 25px;

        font-weight: normal;
        outline: none;
      }

      .emailError,
      .passwordError,
      .repeatPasswordError {
        margin: 5px 0 0 20px;
        align-self: flex-start;

        color: red;
        font-size: 12px;
      }

      .emptyFieldsError {
        margin: 25px 0 15px 0;

        color: red;
        font-size: 12px;
      }

      button {
        width: 200px;
        height: clamp(40px, 2.5vw, 60px);
        margin-top: ${(props) => props.buttonMargin};

        border: none;
        border-radius: 25px;
        background-color: #fff;

        cursor: pointer;
        outline: none;

        @media (max-width: 1280px) {
          margin-bottom: 50px;
        }

        span {
          font-size: clamp(16px, 1vw, 18px);
          font-weight: bold;

          background-image: linear-gradient(
            272.11deg,
            #0a3745 3.56%,
            #1e7f9d 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .loading {
        height: clamp(40px, 2.5vw, 60px);
        margin-top: 30px;

        display: flex;
        align-items: center;

        text-align: center;

        @media (max-width: 1280px) {
          margin-bottom: 50px;
        }

        div {
          width: 15px;
          height: 15px;

          margin: 0 4px;

          background-color: #fff;
          border-radius: 100%;

          animation: bouncedelay 1.2s infinite ease-in-out both;
        }

        .dot1 {
          animation-delay: -0.32s;
        }

        .dot2 {
          animation-delay: -0.16s;
        }

        @keyframes bouncedelay {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      }

      .error {
        display: flex;
        align-items: center;
        margin-top: 30px;

        animation: 0.6s appear;

        @media (max-width: 1280px) {
          margin-bottom: 50px;
        }

        img {
          width: 30px;
        }

        p {
          margin-left: 5px;

          color: #fff;
          font-size: 14px;
          font-style: italic;
        }

        @keyframes appear {
          0% {
            transform: scale(0.2);
          }
          60% {
            transform: scale(1);
          }
          80% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      }
    }
  }
`;

export default FormSectionStyles;
