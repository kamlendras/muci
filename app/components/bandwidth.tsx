"use client";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import LinearProgress from "@mui/joy/LinearProgress";
export default function Home() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 300);
  });
  return (
    <>
      {loading ? (
        <LinearProgress variant="solid" />
      ) : (
        <Fade duration={200}>
          <Typography level="body-lg">Attached Devices(8)</Typography>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg" }}
          >
            <div className="scroll">
              <table>
                <tr>
                  <th>Device Name</th>
                  <th>Download Speed</th>
                  <th>Upload Speed</th>
                  <th>Download Limit</th>
                  <th>Upload Limit</th>
                  <th>Internet Access</th>
                </tr>
                <Divider />
                <tr>
                  <td>
                    <Input defaultValue="Vivo" variant="outlined" />
                  </td>
                  <td>0KB/s</td>
                  <td>0KB/s</td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">128 KB/s(Web Browsing)</Option>
                      <Option value="3">256 KB/s(SD Videos)</Option>
                      <Option value="4">512 KB/s(HD Videos)</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">32KB/s</Option>
                      <Option value="3">64KB/s</Option>
                      <Option value="4">128KB/s</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>Native Device</td>
                </tr>
                <tr>
                  <td>
                    <Input defaultValue="pixel 8" variant="outlined" />
                  </td>
                  <td>0KB/s</td>
                  <td>0KB/s</td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">128 KB/s(Web Browsing)</Option>
                      <Option value="3">256 KB/s(SD Videos)</Option>
                      <Option value="4">512 KB/s(HD Videos)</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">32KB/s</Option>
                      <Option value="3">64KB/s</Option>
                      <Option value="4">128KB/s</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>Native Device</td>
                </tr>
                <tr>
                  <td>
                    <Input defaultValue="Mi 10" variant="outlined" />
                  </td>
                  <td>0KB/s</td>
                  <td>0KB/s</td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">128 KB/s(Web Browsing)</Option>
                      <Option value="3">256 KB/s(SD Videos)</Option>
                      <Option value="4">512 KB/s(HD Videos)</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">32KB/s</Option>
                      <Option value="3">64KB/s</Option>
                      <Option value="4">128KB/s</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>Native Device</td>
                </tr>
                <tr>
                  <td>
                    <Input defaultValue="gentoobox" variant="outlined" />
                  </td>
                  <td>0KB/s</td>
                  <td>0KB/s</td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">128 KB/s(Web Browsing)</Option>
                      <Option value="3">256 KB/s(SD Videos)</Option>
                      <Option value="4">512 KB/s(HD Videos)</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">32KB/s</Option>
                      <Option value="3">64KB/s</Option>
                      <Option value="4">128KB/s</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>Native Device</td>
                </tr>
                <tr>
                  <td>
                    <Input defaultValue="Galaxy s24" variant="outlined" />
                  </td>
                  <td>0KB/s</td>
                  <td>0KB/s</td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">128 KB/s(Web Browsing)</Option>
                      <Option value="3">256 KB/s(SD Videos)</Option>
                      <Option value="4">512 KB/s(HD Videos)</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">32KB/s</Option>
                      <Option value="3">64KB/s</Option>
                      <Option value="4">128KB/s</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>Native Device</td>
                </tr>
                <tr>
                  <td>
                    <Input defaultValue="iphone" variant="outlined" />
                  </td>
                  <td>0KB/s</td>
                  <td>0KB/s</td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">128 KB/s(Web Browsing)</Option>
                      <Option value="3">256 KB/s(SD Videos)</Option>
                      <Option value="4">512 KB/s(HD Videos)</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>
                    <Select defaultValue="1">
                      <Option value="1">No Limit</Option>
                      <Option value="2">32KB/s</Option>
                      <Option value="3">64KB/s</Option>
                      <Option value="4">128KB/s</Option>
                      <Divider />
                      <Option value="5">Manual(unit: KB/s)</Option>
                    </Select>
                  </td>
                  <td>Native Device</td>
                </tr>
              </table>
            </div>
          </Sheet>

          <Typography level="body-lg">Blocked Devices(0)</Typography>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg" }}
          >
            <div className="scroll">
              <table>
                <tr>
                  <th>Device Name </th>
                  <th>MAC Address </th>
                  <th>Action </th>
                </tr>
                <Divider />
                <tr>
                  <td>No device</td>
                </tr>
              </table>
            </div>
          </Sheet>
        </Fade>
      )}
    </>
  );
}
