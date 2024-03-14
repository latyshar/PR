import React from 'react'
import Check from '../components/Check';
import TimeDisplay from '../components/TimeDisplay';
import '../table.css';
import '../App.css';
import Navbar from '../components/Navbar';

function Home () {
  return (

<div className="center"> 
<Navbar/>

  <TimeDisplay /> 
  


  <div id="timeText1" style={{ display: 'none' }}>
  
  <div id="timeText11" className='table-box' style={{ display: 'none' }}>
                     <div id='myElement1' className='upercase'> Нечетная неделя</div>
                      <table  id='table1' className="color1"> 

                        <thead>
                          <tr>
                            <th scope="col">№</th>
                            <th scope="col">Предмет</th>
                            <th scope="col">Кабинет</th>
                            <th scope="col">Время</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Программирование (26.02, 25.03, 22.04, 20.05)</td>
                            <td data-label="Кабинет&nbsp;">331</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td data-label="№&nbsp;">7</td>
                            <td data-label="Предмет&nbsp;"><br/>Программирование (26.02, 25.03, 22.04, 20.05)</td>
                            <td data-label="Кабинет&nbsp;">331</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                        </tbody>
                      </table>
                      </div>

                      <div id="timeText12" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement2' className='upercase'> Четная неделя</div>
                      <table  id='table1' className="color1"> 

                        <thead>
                          <tr>
                            <th scope="col">№</th>
                            <th scope="col">Предмет</th>
                            <th scope="col">Кабинет</th>
                            <th scope="col">Время</th>
                          </tr>
                        </thead>
                        <tbody>
                      <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Физика ЛЕКЦ.</td>
                            <td data-label="Кабинет&nbsp;">308</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          </tbody>
                      </table>
                        </div>

                        </div>
 
  

      <div id="timeText2" style={{ display: 'none'}}>

      <div id="timeText21" className='table-box' style={{ display: 'none' }}>
       <div id='myElement3' className='upercase'> Нечетная неделя</div>
                      <table id='table2' className="color1"> 

                        <thead>
                          <tr>
                            <th scope="col">№</th>
                            <th scope="col">Предмет</th>
                            <th scope="col">Кабинет</th>
                            <th scope="col">Время</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Медиадизайн (27.02, 26.03, 23.04, 21.05)</td>
                            <td data-label="Кабинет&nbsp;">332</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                          <td data-label="№&nbsp;">7</td>
                            <td data-label="Предмет&nbsp;"><br/>Медиадизайн (27.02, 26.03, 23.04, 21.05)</td>
                            <td data-label="Кабинет&nbsp;">332</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                      
                        </tbody>
                      </table>
                      </div>

                      <div id="timeText22" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement4' className='upercase'> Четная неделя</div>
                      <table id='table3' className="color1"> 

                              <thead>
                                <tr>
                                  <th scope="col">№</th>
                                  <th scope="col">Предмет</th>
                                  <th scope="col">Кабинет</th>
                                  <th scope="col">Время</th>
                                </tr>
                              </thead>
                              
                              <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Иностранный яз.</td>
                            <td data-label="Кабинет&nbsp;">104</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Иностранный яз.</td>
                            <td data-label="Кабинет&nbsp;">104</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                        </table>
                        </div>

      </div>

          <div id="timeText3" style={{ display: 'none'  }}>
          <div id="timeText31" className='table-box' style={{ display: 'none' }}>
                      <table id='table4' className="color1"> 
                        <thead>
                          <tr>
                            <th scope="col">№</th>
                            <th scope="col">Предмет</th>
                            <th scope="col">Кабинет</th>
                            <th scope="col">Время</th>
                          </tr>
                        </thead>

                        <tbody>
                        <tr>
                        <td data-label="№&nbsp;">6</td>
                        <td data-label="Предмет&nbsp;"><br/>Физика ЛАБ</td>
                        <td data-label="Кабинет&nbsp;">029</td>
                        <td data-label="Время&nbsp;">18:30 - 20:00</td>
                        </tr>
                        </tbody>
                        </table>
                      </div>

                      <div id="timeText32" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement6' className='upercase'> Четная неделя</div>
                      <table id='table4' className="color1"> 

                              <thead>
                                <tr>
                                  <th scope="col">№</th>
                                  <th scope="col">Предмет</th>
                                  <th scope="col">Кабинет</th>
                                  <th scope="col">Время</th>
                                </tr>
                              </thead>
                              
                              <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Комп. графика</td>
                            <td data-label="Кабинет&nbsp;">331</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Комп. графика</td>
                            <td data-label="Кабинет&nbsp;">331</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                        </table>
                        </div>

          </div>

              <div id="timeText4" style={{ display: 'none' }}>

              <div id="timeText41" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement7' className='upercase'> Нечетная неделя</div>
                      <table id='table5' className="color1"> 

                        <thead>
                          <tr>
                            <th scope="col">№</th>
                            <th scope="col">Предмет</th>
                            <th scope="col">Кабинет</th>
                            <th scope="col">Время</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Математика ПР.</td>
                            <td data-label="Кабинет&nbsp;">117</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Математика ПР.</td>
                            <td data-label="Кабинет&nbsp;">117</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                      </table>
                      </div>

                      <div id="timeText42" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement8' className='upercase'> Четная неделя</div>
                      <div className='upercase3'>Занятий нет</div>
                        </div>

              </div>

                  <div id="timeText5" style={{ display: 'none' }}>

                  <div id="timeText51" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement9' className='upercase'> Нечетная неделя</div>
                      <div className='upercase3'>Занятий нет</div>
                      </div>

                      <div id="timeText52" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement10' className='upercase'> Четная неделя</div>
                      <table id='table8' className="color1"> 

                              <thead>
                                <tr>
                                  <th scope="col">№</th>
                                  <th scope="col">Предмет</th>
                                  <th scope="col">Кабинет</th>
                                  <th scope="col">Время</th>
                                </tr>
                              </thead>
                              
                              <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Программирование ЛЕК. (09.02, 22.03, 05.04, 03.05)</td>
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Программирование ЛЕК. (09.02, 22.03, 05.04, 03.05)</td>
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                        </table>
                        </div>


                  </div>

                      <div id="timeText6" className='table-container' style={{ display: 'none' }}> 
                      <div id="timeText61" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement11' className='upercase'> Нечетная неделя</div>
                      <table id='table9' className="color1"> 

                        <thead>
                          <tr>
                            <th scope="col">№</th>
                            <th scope="col">Предмет</th>
                            <th scope="col">Кабинет</th>
                            <th scope="col">Время</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="№&nbsp;">2</td>
                            <td data-label="Предмет&nbsp;"><br/>Философия ПР. (02.03, 30.03, 27.04, 25.05)</td>
                            <td data-label="Кабинет&nbsp;">120</td>
                            <td data-label="Время&nbsp;">10:05 - 11:30</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">3</td>
                            <td data-label="Предмет &nbsp;"><br/>Философия ПР. (02.03, 30.03, 27.04, 25.05)</td>
                            <td data-label="Кабинет&nbsp;">120</td>
                            <td data-label="Время&nbsp;">11:40 - 13:05</td>
                          </tr>
                    
                        </tbody>
                      </table>
                      </div>

                      <div id="timeText62" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement12' className='upercase'> Четная неделя</div>
                      <table id='table10' className="color1"> 

                              <thead>
                                <tr>
                                  <th scope="col">№</th>
                                  <th scope="col">Предмет</th>
                                  <th scope="col">Кабинет</th>
                                  <th scope="col">Время</th>
                                </tr>
                              </thead>
                              <tbody>
                          <tr>
                            <td data-label="№&nbsp;">2</td>
                            <td data-label="Предмет&nbsp;"><br/>Математика ЛЕК</td>
                            <td data-label="Кабинет&nbsp;">308</td>
                            <td data-label="Время&nbsp;">10:05 - 11:30</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">3</td>
                            <td data-label="Предмет &nbsp;"><br/>Математика ЛЕк</td>
                            <td data-label="Кабинет&nbsp;">308</td>
                            <td data-label="Время&nbsp;">11:40 - 13:05</td>
                          </tr>

                          <tr>
                            <td scope="row" data-label="№&nbsp;">4</td>
                            <td data-label="Предмет &nbsp;"><br/>Философия ЛЕК.</td>
                            <td data-label="Кабинет&nbsp;">116</td>
                            <td data-label="Время&nbsp;">13:45 - 15:10</td>
                          </tr>
                      
                        </tbody>
                        </table>
                        </div>
                      </div>

                          <div id="timeText7" style={{ display: 'none' }}>
                          <div className='upercase3'>Занятий нет</div>
                          </div> 
                          
                          </div> 

  )
}

export default Home
