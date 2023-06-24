import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const LogoutModal = ({ visible, modalPosition, onMyAccount, onLogout }) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
    >
      <View style={[styles.modalContainer, modalPosition]}>
        <View style={styles.modalContent}>
          {/*<Text style={styles.modalMessage}>Are you sure to sign out?</Text>*/}
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalCancelButton}
              onPress={onMyAccount}
            >
              <Text style={styles.modalButtonText}>My Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalSignOutButton}
              onPress={onLogout}
            >
              <Text style={styles.modalButtonText}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  modalMessage: {
    fontSize: 18,
    marginBottom: 20,
    color: 'blue',
  },
  modalButtonContainer: {
    justifyContent: 'space-around',
  },
  modalCancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderBottomColor: 'black', 
  },
  modalSignOutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'blue',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default LogoutModal;
