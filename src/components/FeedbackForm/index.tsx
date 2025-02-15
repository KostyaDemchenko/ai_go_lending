import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/src/components/Button";

import "./style.scss";

// Схема валидации с помощью Zod
const feedbackSchema = z.object({
  name: z.string().min(2, "Ім'я повинно містити принаймні 2 символи"),
  email: z.string().email("Будь ласка, введіть дійсну електронну адресу"),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

interface FeedbackModalProps {
  visible: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ visible, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = (data: FeedbackFormData) => {
    console.log("Submitted data: ", data);
    // Здесь можно реализовать отправку данных на сервер
    reset();
    triggerClose();
  };

  const triggerClose = () => {
    setIsClosing(true);
    // После окончания анимации (0.3с) вызываем onClose
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  // Отключаем скролл, когда модалка открыта
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  // Получаем элемент для портала (убедитесь, что он есть в DOM)
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  const modalContent = (
    <div className='feedback-modal-overlay' onClick={triggerClose}>
      <div
        className={`feedback-modal-container ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className='modal-close-button' onClick={triggerClose}>
          <span className='close-line'></span>
          <span className='close-line'></span>
        </button>
        <div className='modal-info'>
          <h2 className='modal-title'>Підписатися на оновлення</h2>
          <p className='modal-description'>
            Введіть своє ім'я та електронну адресу, щоб отримувати останні
            новини про сервіс.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='modal-form'>
          <div className='form-group'>
            <input type='text' placeholder="Ім'я" {...register("name")} />
            {errors.name && <p className='error'>{errors.name.message}</p>}
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Електронна адреса'
              {...register("email")}
            />
            {errors.email && <p className='error'>{errors.email.message}</p>}
          </div>
          <Button type='submit'>Підписатися</Button>
        </form>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default FeedbackModal;
