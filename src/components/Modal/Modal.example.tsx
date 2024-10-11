import { useState } from "react";
import Modal from "./Modal";
import Card from "../Card/Card";
import imageUrl from '../assets/images/beaugosse.png';

function ModalExample () {

    interface CardData {
        titre: string;
        imageUrl: string;
        content: string;
        actionText: string;
        extraClass: string;
    }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const openModal = (card: CardData) => {
    setSelectedCard(card);
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
};

const cardData: CardData = {
    titre: "WOW",
    imageUrl: imageUrl,
    content: "Chokbar",
    actionText: "voir plus",
    extraClass: "height-500 width-30"
};

const handleClick = () => {
    openModal(cardData);
  };

  const codeExample1 = `
    interface CardData {
        titre: string;
        imageUrl: string;
        content: string;
        actionText: string;
        extraClass: string;
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

    const openModal = (card: CardData) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    const cardData: CardData = {
        titre: "WOW",
        imageUrl: imageUrl,
        content: "Chokbar",
        actionText: "voir plus",
        extraClass: "height-500 width-30"
    };
        <Card titre="WOW"
            imageUrl={imageUrl} 
            description='Chokbar' 
            actionText='voir plus' 
            extraClass="height-500 width-30" 
            onActionClick={handleClick} />
            {selectedCard && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={selectedCard.titre}
                    imgUrl={selectedCard.imageUrl}
                    content={selectedCard.content}
                />
            )}
    `;

    return (
        <div className="component-column">
          <div className="componentCode">
            <div className="container-row">
                <Card titre="WOW"
                imageUrl={imageUrl} 
                description='Chokbar' 
                actionText='voir plus' 
                extraClass="height-500 width-30" 
                onActionClick={handleClick} />
                {selectedCard && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        title={selectedCard.titre}
                        imgUrl={selectedCard.imageUrl}
                        content={selectedCard.content}
                    />
                )}
                <Card 
                titre="WOW" 
                imageUrl={imageUrl} 
                description='Chokbar' 
                actionText='voir plus' 
                extraClass="height-500 width-50" 
                onActionClick={handleClick} />
                {selectedCard && (
                    <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        title={selectedCard.titre}
                        imgUrl={selectedCard.imageUrl}
                        content={selectedCard.content}
                    />
                )}
            </div>
    
            <div className="code-example-container">
              <pre>
                <code>{codeExample1}</code>
              </pre>
              <button
                className="copy-button"
                onClick={() => navigator.clipboard.writeText(codeExample1)}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      );

}

export default ModalExample;