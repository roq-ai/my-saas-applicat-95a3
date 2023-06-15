import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Data Analyst'];
  const roles = ['Data Analyst'];
  const applicationName = `My SaaS application`;
  const tenantName = `Company`;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `1. As a Data Analyst, I want to create a new Company in the application so that I can manage its Power BI Dashboard.

2. As a Data Analyst, I want to edit the Company details so that I can keep the information up-to-date.

3. As a Data Analyst, I want to delete a Company from the application so that I can remove irrelevant or outdated data.

4. As a Data Analyst, I want to view a list of all Companies in the application so that I can easily access their Power BI Dashboards.

5. As a Data Analyst, I want to invite other users to the application so that they can collaborate on the Power BI Dashboard.

6. As a Data Analyst, I want to assign specific roles to invited users so that they have the appropriate permissions within the application.

7. As a Data Analyst, I want to remove users from the application so that I can maintain control over who has access to the Power BI Dashboard.

8. As a Data Analyst, I want to create a Power BI Dashboard for a Company so that I can visualize and analyze the Company's data.

9. As a Data Analyst, I want to edit the Power BI Dashboard so that I can update the visualizations and data as needed.

10. As a Data Analyst, I want to delete a Power BI Dashboard so that I can remove outdated or irrelevant visualizations.

11. As an invited user, I want to view the Power BI Dashboard for a Company so that I can analyze the data and make informed decisions.

12. As an invited user, I want to edit the Power BI Dashboard (if I have the appropriate permissions) so that I can contribute to the data analysis and visualization.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="30px" bottom="20px" zIndex={3}>
      <Popover placement="top-end">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent w="50vw" h="70vh">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
