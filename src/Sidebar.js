import React, { useState } from 'react';
import { menuItems } from './menuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeSubItems, setActiveSubItems] = useState([]);

  const handleItemClick = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleSubItemClick = (itemId) => {
    if (activeSubItems.includes(itemId)) {
      setActiveSubItems(activeSubItems.filter((item) => item !== itemId));
    } else {
      setActiveSubItems([...activeSubItems, itemId]);
    }
  };

  const renderMenuItem = (item) => {
    const isActive = selectedItems.includes(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const backgroundColor = isActive ? 'skyblue' : 'transparent';
    const padding = isActive ? '15px' : 'transparent';
    const color = isActive ? 'white' : 'white';

    return (
      <li key={item.id} className={isActive ? 'active' : ''}>
        <div style={{ backgroundColor, padding }} className={isActive ? 'active' : ''}>
          <a
            href={item.link}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick(item.id);
            }}
            style={{ color }}
            className={isActive ? 'active' : ''}
          >
            <input
              type="checkbox"
              checked={isActive}
              className={`checkbox-icon ${isActive ? 'active' : ''}`}
              onChange={() => handleItemClick(item.id)}
            />
            {item.name}
            {hasSubItems && (
              <span className="dropdown-icon">
                {activeSubItems.includes(item.id) ? (
                  <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  <FontAwesomeIcon icon={faAngleUp} />
                )}
              </span>
            )}
          </a>
        </div>
        {isActive && hasSubItems && (
          <ul className="sub-menu">
            {item.subItems.map((subItem) => (
              <li key={subItem.id} className={subItem.subItems1 ? 'has-sub-menu' : ''}>
                <a
                  href={subItem.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubItemClick(subItem.id);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(subItem.id)}
                    className="checkbox-icon"
                    onChange={() => handleItemClick(subItem.id)}
                  />
                  {subItem.name}
                  {subItem.subItems1 && (
                    <span className="dropdown-icon">
                      {activeSubItems.includes(subItem.id) ? (
                        <FontAwesomeIcon icon={faAngleDown} />
                      ) : (
                        <FontAwesomeIcon icon={faAngleUp} />
                      )}
                    </span>
                  )}
                </a>
                {activeSubItems.includes(subItem.id) && subItem.subItems1 && (
                  <ul className="sub-menu">
                    {subItem.subItems1.map((subSubItem1) => (
                      <li key={subSubItem1.id} className={subSubItem1.subItems2 ? 'has-sub-menu' : ''}>
                        <a
                          href={subSubItem1.link}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubItemClick(subSubItem1.id);
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(subSubItem1.id)}
                            className="checkbox-icon"
                            onChange={() => handleItemClick(subSubItem1.id)}
                          />
                          {subSubItem1.name}
                          {subSubItem1.subItems2 && (
                            <span className="dropdown-icon">
                              {activeSubItems.includes(subSubItem1.id) ? (
                                <FontAwesomeIcon icon={faAngleDown} />
                              ) : (
                                <FontAwesomeIcon icon={faAngleUp} />
                              )}
                            </span>
                          )}
                        </a>
                        {activeSubItems.includes(subSubItem1.id) && subSubItem1.subItems2 && (
                          <ul className="sub-menu">
                            {subSubItem1.subItems2.map((subSubItem2) => (
                              <li key={subSubItem2.id}>
                                <a
                                  href={subSubItem2.link}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSubItemClick(subSubItem2.id);
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedItems.includes(subSubItem2.id)}
                                    className="checkbox-icon"
                                    onChange={() => handleItemClick(subSubItem2.id)}
                                  />
                                  {subSubItem2.name}
                                </a>
                                {subSubItem2.subItems3 && (
                                  <span className="dropdown-icon">
                                    {activeSubItems.includes(subSubItem2.id) ? (
                                      <FontAwesomeIcon icon={faAngleDown} />
                                    ) : (
                                      <FontAwesomeIcon icon={faAngleUp} />
                                    )}
                                  </span>
                                )}
                                {activeSubItems.includes(subSubItem2.id) && subSubItem2.subItems3 && (
                                  <ul className="sub-menu">
                                    {subSubItem2.subItems3.map((subSubItem3) => (
                                      <li key={subSubItem3.id}>
                                        <a href={subSubItem3.link}>
                                          <input
                                            type="checkbox"
                                            checked={selectedItems.includes(subSubItem3.id)}
                                            className="checkbox-icon"
                                            onChange={() => handleItemClick(subSubItem3.id)}
                                          />
                                          {subSubItem3.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="sidebar">
      <h3>
        <FontAwesomeIcon icon={faChartBar} className="statistics-icon" />
        Statistics
      </h3>
      <ul className="menu">{menuItems.map((item) => renderMenuItem(item))}</ul>
    </div>
  );
};

export default Sidebar;
