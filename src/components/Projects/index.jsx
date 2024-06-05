import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on projects at web apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'FULL STACK' ?
            <ToggleButton active value="FULL STACK" onClick={() => setToggle('FULL STACK')}>FULL STACK</ToggleButton>
            :
            <ToggleButton value="FULL STACK" onClick={() => setToggle('FULL STACK')}>FULL STACK</ToggleButton>
          }
          <Divider />
          {toggle === 'FRONT END' ?
            <ToggleButton active value="FRONT END" onClick={() => setToggle('FRONT END')}>FRONT END</ToggleButton>
            :
            <ToggleButton value="FRONT END'" onClick={() => setToggle('FRONT END')}>FRONT END</ToggleButton>
          }
          <Divider />
          {toggle === 'AWS DEVOPS' ?
            <ToggleButton active value="AWS DEVOPS" onClick={() => setToggle('AWS DEVOPS')}>AWS DEVOPS</ToggleButton>
            :
            <ToggleButton value="AWS DEVOPS" onClick={() => setToggle('AWS DEVOPS')}>AWS DEVOPS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
