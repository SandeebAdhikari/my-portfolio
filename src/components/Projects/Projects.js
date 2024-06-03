import React, { useState } from 'react';
import Project1Img from '../../assets/Project_1.png'
import './Projects.css';

const Projects = () => {
  const [output, setOutput] = useState('');

  const runDemo = async (project) => {
    let code;
    if (project === 'task_schedule_and_remainder') {
      code = `
import sys
from PyQt5.QtWidgets import *
from PyQt5 import QtCore, QtGui
from PyQt5.QtGui import *
from PyQt5.QtCore import *
import sys

class TextWrapDelegate(QStyledItemDelegate):
    def __init__(self, parent=None):
        super().__init__(parent)

    def paint(self, painter, option, index):
        painter.save()

        # Draw background
        if option.state & QStyle.State_Selected:
            painter.fillRect(option.rect, option.palette.highlight())
        else:
            painter.fillRect(option.rect, option.palette.base())

        # Draw text
        text = index.data(Qt.DisplayRole)
        doc = QTextDocument()
        doc.setTextWidth(option.rect.width())
        doc.setHtml(text)
        painter.translate(option.rect.topLeft())
        doc.drawContents(painter)

        painter.restore()

    def sizeHint(self, option, index):
        text = index.data(Qt.DisplayRole)
        doc = QTextDocument()
        doc.setHtml(text)
        return QSize(int(doc.idealWidth()), int(doc.size().height()))

class TaskScheduler(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle('Task Scheduler and Reminder')

        main_vertical_layout = QVBoxLayout()

        main_horizontal_layout = QHBoxLayout()

        left_layout = QVBoxLayout()

        self.top_left_taskInput = QTextEdit(self)
        self.top_left_taskInput.setPlaceholderText('Enter a new task')

        self.top_left_addButton = QPushButton('Add Task', self)
        self.top_left_addButton.clicked.connect(self.addTask)

        left_layout.addWidget(self.top_left_taskInput)
        left_layout.addWidget(self.top_left_addButton)

        right_layout = QVBoxLayout()

        self.time = QTimeEdit(self)
        self.time.setDisplayFormat("HH:mm")

        self.top_right_calendar = QCalendarWidget()
        self.top_right_calendar.setGridVisible(True)
        self.top_right_calendar.clicked.connect(self.selectDate)

        right_layout.addWidget(self.time)
        right_layout.addWidget(self.top_right_calendar)

        main_horizontal_layout.addLayout(left_layout)
        main_horizontal_layout.addLayout(right_layout)

        main_vertical_layout.addLayout(main_horizontal_layout)

        self.tree_taskList = QTreeWidget()
        self.tree_taskList.setHeaderLabels(["Date", "Time", "Task"])
        self.tree_taskList.setColumnWidth(0, 200)  
        self.tree_taskList.setColumnWidth(1, 300)
        self.tree_taskList.header().setSectionResizeMode(QHeaderView.Interactive)  
        self.tree_taskList.setItemDelegate(TextWrapDelegate(self.tree_taskList))

        main_vertical_layout.addWidget(self.tree_taskList)

        self.setLayout(main_vertical_layout)

    def selectDate(self, date):
        self.selected_date = date

    def addTask(self):
        task = self.top_left_taskInput.toPlainText()
        if task and self.selected_date:
            QTreeWidgetItem(self.tree_taskList,[self.selected_date.toString(), self.time.time().toString(), task])
            self.top_left_taskInput.clear()
            self.selected_date = None

if __name__ == '__main__':
    app = QApplication(sys.argv)
    scheduler = TaskScheduler()
    scheduler.show()
    sys.exit(app.exec_())
      `;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/run_code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setOutput(result.result || result.error);
    } catch (error) {
      console.error('Error during fetch operation:', error);
      setOutput('Failed to run demo: ' + error.message);
    }
  };

  return (
    <section id="projects">
      <p className="section_text_P1">Browse My Recent</p>
      <h1 className="name">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details color-container">
            <div className="article-container">
              <img src={Project1Img} alt="Connect Four" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Task Scheduler and Reminder</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/SandeebAdhikari/Connect_Four'}>GitHub</button>
              <button className="btn btn-color-2 project-btn" onClick={() => runDemo('task_schedule_and_remainder')}>Live Demo</button>
            </div>
          </div>
          <div className="details color-container">
            <div className="article-container">
              <img src="./assets/diceRoller.png" alt="Dice Roller" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Dice Roller</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/SandeebAdhikari/Dice_Roller'}>GitHub</button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/SandeebAdhikari/Dice_Roller'}>Live Demo</button>
            </div>
          </div>
          <div className="details color-container">
            <div className="article-container">
              <img src="./assets/convinence.png" alt="Convenience" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Convenience</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/SandeebAdhikari/Convinence'}>GitHub</button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = 'https://github.com/SandeebAdhikari/Convinence'}>Live Demo</button>
            </div>
          </div>
        </div>
      </div>
      <pre id="output">{output}</pre>
    </section>
  );
};

export default Projects;
