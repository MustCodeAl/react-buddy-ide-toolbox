import React, {Fragment, ReactNode} from "react";
import {
  Category,
  Component,
  Variant,
  Palette,
} from "@react-buddy/ide-toolbox";

import {
  Avatar,
  Accordion,
  Autocomplete,
  Badge,
  Button,
  Breadcrumbs,
  Card,
  Checkbox,
  CheckboxGroup,
  Chip,
  Code,
  Input,
  // DateInput,
  // TimeInput,
  CircularProgress,
  // Calendar,
  // RangeCalendar,
  // DatePicker,
  // DateRangePicker,
  Divider,
  Dropdown,
  Image,
  Kbd,
  Link,
  Listbox,
  // Modal,
  Navbar,
  Pagination,
  // Popover,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  // Snippet,
  // ScrollShadow,
  Spacer,
  Spinner,
  Switch,
  Slider,
  Table,
  Tabs,
  Textarea,
  Tooltip,
  User, AutocompleteItem, SelectItem,
  DropdownItem, DropdownMenu,
  DropdownTrigger, AccordionItem, BreadcrumbItem,
  NavbarContent,
  NavbarItem,
  CardBody,
  Tab, ListboxItem,
  NavbarBrand,
  TableRow,
  TableCell, TableBody, TableColumn,
  TableHeader, Snippet
} from "@nextui-org/react";
const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const animals = [
  {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
  {label: "Dog", value: "dog", description: "The most popular pet in the world"},
  {label: "Elephant", value: "elephant", description: "The largest land animal"},
  {label: "Lion", value: "lion", description: "The king of the jungle"},
  {label: "Tiger", value: "tiger", description: "The largest cat species"},
  {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
  {label: "Zebra", value: "zebra", description: "A several species of African equids"},
  {
    label: "Shark",
    value: "shark",
    description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
  {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
];
type ListboxWrapperProps = {
  children: ReactNode;
};
// const [selected, setSelected] = useState(["buenos-aires", "sydney"]);
export const ListboxWrapper = ({children}: ListboxWrapperProps) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const PaletteTree = () => (

  <Palette>
    <Category name="App">
      <Component name="Loader">
        <Variant>
          <ExampleLoaderComponent/>
        </Variant>
      </Component>
    </Category>

    <Category name="Layout">
      <Component name={"Spacer"}>
        <Variant name={"flex"}>
          <div className="flex">
            <CustomCard/>
            <Spacer x={4}/>
            <CustomCard/>
            <Spacer x={4}/>
            <CustomCard/>
          </div>
        </Variant>
      </Component>
      <Component name={"Divider"}>
        <Variant>

          <div className="max-w-md">
            <div className="space-y-1">
              <h4 className="text-medium font-medium">NextUI Components</h4>
              <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
            </div>
            <Divider className="my-4"/>
            <div className="flex h-5 items-center space-x-4 text-small">
              <div>Blog</div>
              <Divider orientation="vertical"/>
              <div>Docs</div>
              <Divider orientation="vertical"/>
              <div>Source</div>
            </div>
          </div>
        </Variant>

      </Component>

    </Category>

    <Category name="Surfaces">
      <Component name={"Card"}>
        <Variant name={""}>
        </Variant>
      </Component>

      <Component name={"Modal"}>
        <Variant name={""}>
        </Variant>
      </Component>
      <Component name={"Popover"}>
        <Variant name={""}>
        </Variant>
      </Component>
    </Category>
    <Category name="Typography">
      <Component name={"Badge"}>
        <Variant name={""}>
          <Badge content="5" color="primary">
            <Avatar
              radius="md"
              size="lg"
              src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
            />
          </Badge>
        </Variant>

        <Variant name={"Sizes"}>
          <div className="flex gap-4 items-center">
            <Badge content="5" color="danger" placement="top-right">
              <Avatar
                isBordered
                radius="md"
                src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
              />
            </Badge>
            <Badge content="5" color="danger" placement="bottom-right">
              <Avatar
                isBordered
                radius="md"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </Badge>
            <Badge content="5" color="danger" placement="top-left">
              <Avatar
                isBordered
                radius="md"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
            </Badge>
            <Badge content="5" color="danger" placement="bottom-left">
              <Avatar
                isBordered
                radius="md"
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              />
            </Badge>
          </div>
        </Variant>
      </Component>
      <Component name={"Code"}>
        <Variant name={""}>
          <div className="flex flex-wrap gap-4">
            <Code color="default">npm install @nextui-org/react</Code>
            <Code color="primary">npm install @nextui-org/react</Code>
            <Code color="secondary">npm install @nextui-org/react</Code>
            <Code color="success">npm install @nextui-org/react</Code>
            <Code color="warning">npm install @nextui-org/react</Code>
            <Code color="danger">npm install @nextui-org/react</Code>
          </div>
        </Variant>
      </Component>
      <Component name={"Snippets"}>
        <Variant name={""}>
          <Snippet>npm install @nextui-org/react</Snippet>

        </Variant>
      </Component>
    </Category>
    <Category name="Inputs">
      <Component name={"Input"}>
        <Variant name={""}>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="email" label="Email"/>
            <Input type="email" label="Email" placeholder="Enter your email"/>
          </div>
        </Variant>
        <Variant name={"Disabled"}>
          <Input
            isDisabled
            type="email"
            label="Email"
            defaultValue="junior@nextui.org"
            className="max-w-xs"
          />
        </Variant>
      </Component>
      <Component name={"DateInput"}>
        <Variant name={""}>
          {/*<div className="flex w-full flex-wrap md:flex-nowrap gap-4">*/}
          {/*    <DateInput label={"Birth date"} placeholderValue={new CalendarDate(1995, 11, 6)}*/}
          {/*               className="max-w-sm"/>*/}
          {/*</div>*/}

        </Variant>
      </Component>
      <Component name={"Checkbox"}>
        <Variant name={"Colors"}>
          <div className="flex gap-4">
            <Checkbox defaultSelected color="default">Default</Checkbox>
            <Checkbox defaultSelected color="primary">Primary</Checkbox>
            <Checkbox defaultSelected color="secondary">Secondary</Checkbox>
            <Checkbox defaultSelected color="success">Success</Checkbox>
            <Checkbox defaultSelected color="warning">Warning</Checkbox>
            <Checkbox defaultSelected color="danger">Danger</Checkbox>
          </div>

        </Variant>
      </Component>
      <Component name={"CheckboxGroup"}>
        <Variant name={""}>
          <CheckboxGroup
            label="Select cities"
            defaultValue={["buenos-aires", "london"]}
          >
            <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
            <Checkbox value="sydney">Sydney</Checkbox>
            <Checkbox value="san-francisco">San Francisco</Checkbox>
            <Checkbox value="london">London</Checkbox>
            <Checkbox value="tokyo">Tokyo</Checkbox>
          </CheckboxGroup>
        </Variant>
      </Component>
      <Component name={"RadioGroup"}>
        <Variant name={""}>
          <RadioGroup
            label="Select your favorite city"
          >
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
        </Variant>
      </Component>
      <Component name={"Select"}>
        <Variant name={""}>
          <Select
            isRequired
            label="Favorite Animal"
            placeholder="Select an animal"
            defaultSelectedKeys={["cat"]}
            className="max-w-xs"
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </Variant>
      </Component>
      <Component name={"TextArea"}>
        <Variant name={""}>
          <Textarea
            label="Description"
            placeholder="Enter your description"
            className="max-w-xs"
          />
        </Variant>
      </Component>
      <Component name={"Autocomplete"}>
        <Variant name={""}>
          <Autocomplete
            isDisabled
            defaultItems={animals}
            label="Favorite Animal"
            placeholder="Search an animal"
            defaultSelectedKey="cat"
            className="max-w-xs"
          >
            {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
          </Autocomplete>

        </Variant>
      </Component>
      <Component name={"Dropdown"}>
        <Variant name={""}>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
              >
                Open Menu
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Variant>
      </Component>
      <Component name={"Slider"}>
        <Variant name={""}>
          <div className="flex flex-col gap-6 w-full max-w-md">
            <Slider
              size="sm"
              step={0.1}
              color="foreground"
              label="Temperature"
              showSteps={true}
              maxValue={1}
              minValue={0}
              defaultValue={0.2}
              className="max-w-md"
            />
            <Slider
              size="md"
              step={0.1}
              color="foreground"
              label="Temperature"
              showSteps={true}
              maxValue={1}
              minValue={0}
              defaultValue={0.4}
              className="max-w-md"
            />
            <Slider
              size="lg"
              step={0.1}
              color="foreground"
              label="Temperature"
              showSteps={true}
              maxValue={1}
              minValue={0}
              defaultValue={0.6}
              className="max-w-md"
            />
          </div>
        </Variant>
      </Component>
      <Component name={"Switch"}>
        <Variant name={""}>
          <Switch defaultSelected aria-label="Automatic updates"/>

        </Variant>
      </Component>

    </Category>
    <Category name="Navigation">
      <Component name={"Accordion"}>
        <Variant name={""}>
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </Variant>
      </Component>
      <Component name={"Breadcrumbs"}>
        <Variant name={""}>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>
        </Variant>
      </Component>
      <Component name={"Navbar"}>
        <Variant name={""}>
          <Navbar>
            <NavbarBrand>
              <AcmeLogo />
              <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="#">
                  Features
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="#" aria-current="page">
                  Customers
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Integrations
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </Variant>
      </Component>
      <Component name={"Pagination"}>
        <Variant name={""}>
          <Pagination total={10} initialPage={1} />

        </Variant>
      </Component>
      <Component name={"Tabs"}>
        <Variant name={""}>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options">
              <Tab key="photos" title="Photos">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="Music">
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="videos" title="Videos">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </Variant>
      </Component>
      <Component name={"Link"}>
        <Variant name={""}>
          <Link href="#">Default Link</Link>

        </Variant>
        <Variant name={"Colors"}>
          <div className="flex gap-4">
            <Link href="#" color="foreground">Foreground</Link>
            <Link href="#" color="primary">Primary</Link>
            <Link href="#" color="secondary">Secondary</Link>
            <Link href="#" color="success">Success</Link>
            <Link href="#" color="warning">Warning</Link>
            <Link href="#" color="danger">Danger</Link>
          </div>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name={"Avatar"}>
        <Variant name={""}>
          <div className="flex gap-3 items-center">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
            <Avatar name="Junior"/>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
            <Avatar name="Jane"/>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
            <Avatar name="Joe"/>
          </div>
        </Variant>
      </Component>
      <Component name={"Button"}>
        <Variant name={""}>
          <Button color="primary">
            Button
          </Button>
        </Variant>
      </Component>
      <Component name={"Chip"}>
        <Variant name={""}>
          <Chip>Chip</Chip>

        </Variant>
      </Component>
      <Component name={"Image"}>
        <Variant name={""}>
          <Image
            width={300}
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </Variant>
      </Component>

      <Component name={"Kbd"}>
        <Variant name={""}>
          <Kbd keys={["command"]}>K</Kbd>

        </Variant>
      </Component>
      <Component name={"Listbox"}>
        <Variant name={""}>
          {/*<ListboxWrapper>*/}
          {/*  <Listbox*/}
          {/*    aria-label="Actions"*/}
          {/*    onAction={(key) => alert(key)}*/}
          {/*  >*/}
          {/*    <ListboxItem key="new">New file</ListboxItem>*/}
          {/*    <ListboxItem key="copy">Copy link</ListboxItem>*/}
          {/*    <ListboxItem key="edit">Edit file</ListboxItem>*/}
          {/*    <ListboxItem key="delete" className="text-danger" color="danger">*/}
          {/*      Delete file*/}
          {/*    </ListboxItem>*/}
          {/*  </Listbox>*/}
          {/*</ListboxWrapper>*/}
        </Variant>
      </Component>
      <Component name={"Table"}>
        <Variant name={""}>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Variant>
      </Component>
      <Component name={"Tooltip"}>
        <Variant name={""}>
          <Tooltip content="I am a tooltip">
            <Button>Hover me</Button>
          </Tooltip>
        </Variant>
      </Component>
      <Component name={"User"}>
        <Variant name={""}>
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
            }}
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name={"CircularProgress"}>
        <Variant name={""}>
          <CircularProgress aria-label="Loading..." />

        </Variant>
      </Component>
      <Component name={"Progress"}>
        <Variant name={""}>
          <Progress aria-label="Loading..." value={60} className="max-w-md"/>

        </Variant>
      </Component>
      <Component name={"Spinner"}>
        <Variant name={""}>
          <Spinner />

        </Variant>
      </Component>
      <Component name={"Skeleton"}>
        <Variant name={""}>
          <Card className="w-[200px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        </Variant>
      </Component>
    </Category>

  </Palette>
);


export function ExampleLoaderComponent() {
  return (
    <Fragment>Loading...</Fragment>
  );
}


export const CustomCard = () => (<Card className="w-[200px] space-y-5 p-4" radius="lg">
    <div className="h-24 rounded-lg bg-default-300"></div>
    <div className="space-y-3">
      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
      <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
      <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
    </div>
  </Card>
);

