import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import styles from './NewProject.module.css';

const NewProject = ({ renderTime }) => {
  const [images, setImages] = useState([]);

  const isFileAllowed = (file) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const extension = file.name.split('.').pop().toLowerCase();
    return allowedExtensions.includes('.' + extension);
  };

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file && isFileAllowed(file)) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((images) => [...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  }

  console.log(
    'NewProject rendered in: ',
    renderTime ? renderTime.toFixed(2) : 0,
    'ms',
  );
  return (
    <>
      <Navbar logoOnly={false} />
      <section className={styles.newproject}>
        <div className={styles.container}>
          <Input inputLabel="Name" label="Name" inputType="text" />
          <Input inputLabel="Desciption" label="Desciption" inputType="text" />
          <Input
            inputLabel="Long Desciption"
            label="Long Desciption"
            inputType="text"
          />
          <Input inputLabel="Price" label="Price" inputType="text" />

          <input
            type="file"
            onChange={handleFileChange}
            accept=".jpg, .jpeg, .png"
          />

          {images && (
            <div className={styles.newproject__images__preview}>
              {images.map((image) => {
                return (
                  <img
                    src={image}
                    alt=""
                    className={styles.newproject__images__preview__img}
                  />
                );
              })}
            </div>
          )}
          <Button type="signup">Create New Project</Button>
        </div>
      </section>
    </>
  );
};

export default NewProject;
