import { useState } from "react";
import './Consultation.scss';
import { getConsultation } from "../../api/socialSeal";

enum FromNames {
  name = 'name',
  email = 'email',
  phone = 'phone',
}

type Form = {
  [key in keyof typeof FromNames]: string;
}


export const Consultation = () => {
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    phone: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setForm(prev => ({ ...prev, [name]: value }))
  }

  const clearForm = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      return;
    }

    const data = {
      name: form.name,
      email: form.email,
      phone: form.phone,
    }

    getConsultation(data)
      .then((response) => console.log(response)) // Add loader & error
      .catch(error => console.error(error))
      .finally(() => clearForm())
  }

  return (
    <section className="consultation">
      <div className="consultation__leftSide">
        <p className="consultation__preTitle">95% Accuracy</p>
        <h3 className="consultation__title">Worldwide Best Digital Marketing Agency</h3>
        <p className="consultation__description">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And</p>
      </div>
      <div className="consultation__rightSide">
        <form action="POST" className="consultation__form" onSubmit={handleSubmit}>
          <h4 className="consultation__form--title">Free Consultation</h4>
          <input
            type='text'
            placeholder="Name"
            className="consultation__form--input"
            name={FromNames.name}
            onChange={handleChange}
            value={form.name}
            required
          />
          <input
            type='email'
            placeholder="Email Address"
            className="consultation__form--input"
            name={FromNames.email}
            onChange={handleChange}
            value={form.email}
            required
          />
          <input
            type='number'
            placeholder="Phone Number"
            className="consultation__form--input"
            name={FromNames.phone}
            onChange={handleChange}
            value={form.phone}
            required
          />
          <button type="submit" className="consultation__form--button">
            Consultation
          </button>
        </form>
      </div>
    </section>
  )
}