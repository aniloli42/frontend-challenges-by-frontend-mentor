import NavDropWrapper from "components/NavDropWrapper";
import NavItem from "components/NavItem";

// svg
import TodoListIcon from "@images/icon-todo.svg";
import CalendarIcon from "@images/icon-calendar.svg";
import ReminderIcon from "@images/icon-reminders.svg";
import PlanningIcon from "@images/icon-planning.svg";

interface Props {}
const NavMenu = (props: Props) => {
  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-6 my-4 md:my-0">
      <NavDropWrapper title="Features">
        <>
          <NavItem title="Todo List">
            <TodoListIcon />
          </NavItem>
          <NavItem title="Calendar">
            <CalendarIcon />
          </NavItem>
          <NavItem title="Reminders">
            <ReminderIcon />
          </NavItem>
          <NavItem title="Planning">
            <PlanningIcon />
          </NavItem>
        </>
      </NavDropWrapper>
      <NavDropWrapper title="Company">
        <>
          <NavItem title="History" />
          <NavItem title="Our Team" />
          <NavItem title="Blog" />
        </>
      </NavDropWrapper>
      <NavItem title="Careers" />
      <NavItem title="About" />
    </nav>
  );
};
export default NavMenu;
