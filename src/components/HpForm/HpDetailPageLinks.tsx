import React, { useState } from 'react';
import { TextInput, FileInput, Container, Grid, Image,Button,Group } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import styles from './HpDetailsPage.module.css';
interface NavProps {
  page:string;
 setPage: React.Dispatch<React.SetStateAction<string>>
}
function HpDetailsPageLinks({page,setPage}:NavProps) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (file: File) => {
    setImage(file);
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  return (
    <Container className={styles.formContainer}>
      <Grid>
        <Grid.Col span={8}>
          <Grid>
            <Grid.Col span={12}>
              <TextInput label="Official Link" placeholder="Enter the official tournament website URL" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Facebook Link" placeholder="Enter the Facebook page URL" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="X Link" placeholder="Enter the X handle or link" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Instagram Link" placeholder="Enter the Instagram profile URL" />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={4}>
          <FileInput
            label="Upload Poster Image*"
            placeholder="Upload the event poster image"
            // icon={<IconUpload size={14} />}
            accept="image/*"
            onChange={(file) => handleImageChange(file as File)}
          />
          {preview && (
            <Image src={preview} alt="Uploaded Image" mt="md" radius="md"  />
          )}
        </Grid.Col>
        <Group  >
        <Button>Back to Home page</Button>
        <Button onClick={()=>setPage('PrizesPage')}>Next</Button>
        </Group> 
      </Grid>
    </Container>
  );
};

export default HpDetailsPageLinks;
