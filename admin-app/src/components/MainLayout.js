import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="Logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">MK</span>
            <span className="lg-logo">ModaTk</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },

            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupon List",
                },
          
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blogs",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABkVJREFUeF7lW3tsU1UY/31n7bZuEF4JAoKoaGI0gKwdZsQsBIWtA4VERnis7XxBYoL/KI/EIIR/eARERKMQxa2doiFEZEo3ssSFZC5Z1wUxmoAmiiAgIM9BN9aez9wBs8Jw7TmnXaP3336/x/md79577rm3hDQeTrdvHFiWM3MxCTEejGEEZoDOguQRsGgA5L7Wupoj6bJF6RCaXOZxyRhvhhDFiehJQoOI4Y3Wen9LIvU6NSkNYPzMhUPsMdtWAV4EIpGkUSbAn223LW3at/NKktiEy1MWQMFMn1PEeA8IYxN200shM45msZzXUl/znQ7P3bApCaCwxPeYFPIggYaaMM3g80KK4lB99Q8m+OI5jAcwafoLo7Js0WYA95k0y8y/C2krCh34+LhJXqMBFJWXO65fdTQTY6JJk7e4WMpDAzttRY2NVR2m+I0G4CrzbgRjmSlzvfPwxtZgYIUpDWMBOEsqCkCihQhZpsz1xsOMGFhODtfXtJnQMRaAy+07APB0E6b64iCgPhT0l/ZVl8jvRgIonFkxhaVoSkTQVI1gTGmp81sXW63DSAAFbt8uAZ6v5SRJMIM/CQcDFUnC7ijXDqCo5MWhXdR1CoRsXTPJ4bmzU8RGfv/1pxeSw/2zWjsAZ6nXR4QqHROqWGJ4QnX+GlW8hTMRwOdEmKdjQhUrQZ+1BasXqOKNBOBye4+ZXvUlOiAG/xoOBh5ItL63OuUOeHxO5eCsTrmEgPU6BvSxvIK7HNvDDTsuqXApB+Aqq/gALJaoiJrGEPB+KOh/RYVXPQC39ySAkSqipjHWg1K4LjBahVcnAGuTYoCKqGkMA5fDQf8gFV7lAJxu32kC36MimgLMqdagf5QKr0YA3loCZqmImsZIYF9b0D9bhVcjAM9rBNqkImoaw+DXw8HAZhVe5QAKyypHSI79QqBcFWFTGGZEuiTff/hA4IwKp3IAllih27uWgVUqwqYwDFobDlavVuXTCsDpXGyn4de+AsQMVQM6OGtfID/y26zGxsaoKo9WAJao8+nFg2CPnE73qcDgDnQ5RqiuAG8Fph2AReQq8X0BwXNUZ0EFJ8F72oKBuSrYeIyZAEo980G0S9dMMnhmnheuC+xOBtNbrZEAJszw5OcIOs6EIbqGEsFbL0pgc4wJ1+64lkj9v9UYCaD7WuD2rkjXkyGBloWC1UbWIMYCmDq1MveKI3aUQGN0Z6UP/Em25T5sYvYtHWMBdHdBOrbHiL2t+wMBUyEbDaD7juD27gTwvCmD8TymdoKN3wXiCa1Tod3BTQAXmA2BD7PNUWSq9Y2uA24f6KSyhWMFbN8QQ2u/7hYvg34UMVFq+s2w8WtAfBBPuBeNjsH2pXYnsGyyc86zzfUfnTfbUTfYjF8D4k06n1mcR9GOqzrG7QMiec27d0d0ONKyDribiMvtZR3zrUF/SicppeQ37wr/3wBcZd41YCg/q988RzeEgv6VOl3UL6eAicHH3apSFoLxU+Ah99KcIXRpDTOMzhoR1l/gQWt+Dm7rNNkNxgJ4tLw8O689bz6zXE1ED5o0+fd6ACcEYVP+NbHd1IdS2gF0D/xKXiUTryJA6e1MsmEx6A+AtwyMiK26QSgHYLX6YLr4EjOtTNfAbw+KgRMEbBgQER+qBpF0AP0x4311CAFnJPAWbLnbkn1WSDiAnoFDvklE9/Zlql9+Z5yDwHt8PXdLopulfQbQ3ep82ceZPPDb0mbgTyK8G80Wbx/aW3VRaR3QvY7v6lzCkMuJaES/zKimKDEusMA7nRTderePqe7oAGvgItbxMjOWA1B646rpOxXwdiLeCWStC+2vOh0v0BOAdY7nt+e9CvAyBoanwkV/c1rfEYB5Hc46NofDO7p6HocnP+UdJu2oA8HV3ybToi/lQc6OPReu3XXO6gAqLPU2MGFaWsQzREQyvh03MFJMrjLvbDD2Zoiv9NpgXkBOt6eGQIvSq5wZataHluQs9ZzI2IVNqnNiHCOX29MBUE6qtTKR3/q6hFxur0z15mgmDr5ns0V30zKTB5eIN6sDtDYtExHJ4BqmCdPKr4PZnsEmU2aNiDpo4tS5x2MympadnJSNRJXYZvuJnDMWPBKNRmuljI1jtv6vfON1EVv/av+PHt2DzLKdJDs9+RdpiiZsZyYo+gAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Ahmad Sal</h5>
                <p className="mb-0">salamea015@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-label="dropdownMenuLink">
                <li className="py-2">
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
