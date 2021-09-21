import '@fontsource/fira-mono/latin.css';
import '@fontsource/poppins/latin.css';

import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Box,
  Button,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Form, FormProvider } from 'templator';
import { FORM_ELEMENTS, LAYOUT_ELEMENTS } from 'constants/form-elements';
import { TEST_FORM } from 'forms/test-form';
import { Navbar } from 'components/elements/navbar/Navbar';
import { Sidebar } from 'components/elements/Sidebar';
import { Tabs } from 'components/elements/Tabs';
import { THEME } from 'constants/theme';
import { CheckboxCard } from 'components/elements/CheckboxCard';
import { SwitchCard } from 'components/elements/SwitchCard';
import { SectionLayout } from 'components/templating/SectionLayout';
import { Input } from 'components/elements/Input';

const Hello = () => {
  return (
    <ChakraProvider theme={THEME}>
      <FormProvider elements={FORM_ELEMENTS} layoutElements={LAYOUT_ELEMENTS}>
        <Box
          w="100vw"
          minH="100vh"
          bg="red"
          backgroundSize="cover"
          backgroundAttachment="fixed"
          backgroundImage="url(/assets/background.jpeg)"
          backgroundPosition="bottom center"
        >
          <Navbar />
          <Box display="flex" h="calc(100% - 80px)">
            <Sidebar />
            <Box h="100%" w="100%">
              <Box h="100%" w="100%" display="flex" flexDirection="column">
                <Box p={4} flex={1}>
                  <VStack alignItems="flex-start" mb={12} mt={6}>
                    <Heading fontWeight={700} fontSize={32} color="gray.100">
                      Youtube DL
                    </Heading>
                    <Heading color="gray.100" fontWeight={500} fontSize={16}>
                      Download Youtube Videos using the youtube-dl utility.
                    </Heading>
                    {/* <Heading
                      fontWeight={500}
                      fontSize={16}
                      color="gray.100"
                      mb={8}
                    >
                      Author: uen, vrondakis
                    </Heading> */}
                  </VStack>
                  <Box
                    minH="50px"
                    w="100%"
                    flex={1}
                    overflowY="auto"
                    backgroundColor="rgba(5,5,5,0.1)"
                    backdropFilter="blur(8px)"
                  >
                    <VStack w="100%">
                      <CheckboxCard
                        label="Enter URLs below"
                        param="--geo-verification"
                        description="Select the filetype you wish to download the sections for"
                      >
                        <>
                          <Input />
                          <Input />

                          <Button>Add</Button>
                        </>
                      </CheckboxCard>
                    </VStack>

                    <Tabs
                      tabs={[
                        {
                          label: 'Videos',
                          icon: 'credit-card',
                          render: () => (
                            <VStack w="100%">
                              <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                                <GridItem rowSpan={2}>
                                  <CheckboxCard
                                    label="Geo verification proxy"
                                    param="--geo-verification"
                                    hasInput
                                    description=" Use this proxy to verify the IP address
                                for some geo-restricted sites"
                                  />
                                </GridItem>
                                <CheckboxCard
                                  label="Geo Bypress"
                                  param="-p"
                                  description=" Bypass geographic restriction via
                                faking X-Forwarded-For HTTP header"
                                />
                                <CheckboxCard
                                  label="Verbose"
                                  param="-v"
                                  description="Print various debugging information"
                                />
                                <GridItem colSpan={2}>
                                  <SwitchCard
                                    label="Ignore errors"
                                    param="-v"
                                    description="Print various debugging information"
                                  />
                                </GridItem>
                              </Grid>
                              <Grid
                                templateColumns="repeat(3, 1fr)"
                                gap={2}
                                w="100%"
                              >
                                <GridItem colSpan={2}></GridItem>
                              </Grid>
                            </VStack>
                          ),
                        },
                        {
                          label: 'Network',
                          icon: 'file-invoice',
                          render: () => <h1>hi</h1>,
                        },

                        {
                          label: 'Download',
                          icon: 'file-invoice',
                          render: () => <h1>hi</h1>,
                        },
                        {
                          label: 'Filesystem ',
                          icon: 'file-invoice',
                          render: () => <h1>hi</h1>,
                        },
                        {
                          label: 'Simulation',
                          icon: 'file-invoice',
                          render: () => <h1>hi</h1>,
                        },
                        {
                          label: 'Workarounds',
                          icon: 'file-invoice',
                          render: () => <h1>hi</h1>,
                        },
                        {
                          label: 'Authentication',
                          icon: 'file-invoice',
                          render: () => <h1>hi</h1>,
                        },

                        {
                          label: 'Post processing',
                          icon: 'file-invoice',
                          render: () => <h1>hi</h1>,
                        },

                        {
                          label: 'Other',
                          icon: 'file-invoice',
                          render: () => <h1>hi</h1>,
                        },

                        {
                          label: 'Flags',
                          icon: 'file-invoice',
                          render: () => <h1>hi</h1>,
                        },
                      ]}
                    />

                    <Box px={4}>
                      <SectionLayout label="Network">
                        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                          <GridItem colSpan={2}>
                            <CheckboxCard
                              label="Extractor descriptions"
                              param="--geo-verification"
                              hasInput={true}
                              description="Use the specified HTTP/HTTPS/SOCKS
                              proxy. To enable SOCKS proxy, specify a
                              proper scheme. For example
                              socks5://127.0.0.1:1080/. Pass in an
                              empty string  for direct
                              connection"
                            />
                          </GridItem>
                          <CheckboxCard
                            label="Socket timeout"
                            hasInput
                            param="--geo-verification"
                            description="Time to wait before giving up, in seconds"
                          />

                          <CheckboxCard
                            label="IP"
                            hasInput
                            param="--geo-verification"
                            description="Client side IP address to bind to"
                          />
                        </Grid>
                      </SectionLayout>

                      <SectionLayout label="Flags">
                        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                          <CheckboxCard
                            label="Extractor descriptions"
                            param="--geo-verification"
                            description="Output descriptions of all supported
                          extractors"
                          />
                          <CheckboxCard
                            label="Force generic descriptior"
                            param="--geo-verification"
                            description="Force extraction to use the generic
                          extractor"
                          />
                          <CheckboxCard
                            label="Geo Bypress"
                            param="-p"
                            description=" Bypass geographic restriction via
                                faking X-Forwarded-For HTTP header"
                          />
                          <CheckboxCard
                            label="Verbose"
                            param="-v"
                            description="Print various debugging information"
                          />

                          <CheckboxCard
                            label="Ignore config"
                            param="--ignore-config"
                            description="Do not read configuration files. When
                          given in the global configuration file
                          /etc/youtube-dl.conf"
                          />

                          <CheckboxCard
                            label="Flat playlist"
                            param="--ignore-config"
                            description="Do not extract the videos of a
                          playlist, only list them."
                          />

                          <CheckboxCard
                            label="No color"
                            param="--ignore-config"
                            description="Do not emit color codes in output"
                          />
                        </Grid>
                      </SectionLayout>

                      <Form
                        schema={TEST_FORM}
                        onSubmit={(data) => {
                          // Called when the form has submitted and all the local validation has passed
                          alert('Form submitted! Data:', JSON.stringify(data));
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </FormProvider>
    </ChakraProvider>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
